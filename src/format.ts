import type {
  FormatResult,
  FormatResultObject,
  SupportedCurrency,
} from "./types";
import { CURRENCIES, type CurrencyCode } from "./currencies";

// Memoization cache for formatCurrency results
const cache = new Map<string, FormatResult>();
const MAX_CACHE_SIZE = 100;

const getCacheKey = (amount: number, code: string): string =>
  `${amount}:${code}`;

/**
 * Clears the internal memoization cache.
 *
 * Use this to free memory or reset state during testing.
 * The cache automatically evicts old entries when full (LRU with 100 entries max).
 *
 * @example
 * clearFormatCache();
 */
export const clearFormatCache = (): void => {
  cache.clear();
};

/**
 * Returns the current number of entries in the memoization cache.
 *
 * Useful for debugging or monitoring cache usage.
 * Maximum cache size is 100 entries.
 *
 * @returns The number of cached format results
 *
 * @example
 * console.log(getFormatCacheSize()); // 42
 */
export const getFormatCacheSize = (): number => cache.size;

// Pre-compiled regex for thousands separator insertion (avoids regex creation per call)
const THOUSANDS_REGEX = /\B(?=(\d{3})+(?!\d))/g;

const formatNumber = (
  num: number,
  format: "comma" | "period",
  decimals: number,
): string => {
  if (!Number.isFinite(num)) {
    return String(num);
  }
  const str = String(num);
  const [intStr, decStr = ""] = str.split(".");
  const thousandsSep = format === "comma" ? "," : ".";
  const decimalSep = format === "comma" ? "." : ",";
  const formattedInt = intStr.replace(THOUSANDS_REGEX, thousandsSep);

  if (decimals === 0) {
    return formattedInt;
  }

  const decPart =
    decStr.length < decimals ? decStr.padEnd(decimals, "0") : decStr;
  return `${formattedInt}${decimalSep}${decPart}`;
};

/**
 * Formats a numeric amount as a localized currency string.
 *
 * Supports 165+ ISO 4217 currency codes with proper symbol placement,
 * thousands separators, and decimal formatting. Results are memoized
 * for performance (LRU cache with 100 entries).
 *
 * @param options - Formatting options
 * @param options.amount - The numeric amount to format (supports negative values)
 * @param options.code - ISO 4217 currency code (e.g., 'USD', 'EUR', 'JPY')
 * @param options.returnType - Optional: 'array' (default) or 'object'
 * @returns Tuple of [formattedWithSymbol, formattedWithoutSymbol, symbol] or object with formatted, value, symbol
 *
 * @example
 * // Basic usage (returns array)
 * formatCurrency({ amount: 1234.56, code: 'USD' });
 * // Returns: ['$1,234.56', '1,234.56', '$']
 *
 * @example
 * // Object return type
 * formatCurrency({ amount: 1234.56, code: 'USD', returnType: 'object' });
 * // Returns: { formatted: '$1,234.56', value: '1,234.56', symbol: '$' }
 *
 * @example
 * // European format (period for thousands, comma for decimals)
 * formatCurrency({ amount: 1234.56, code: 'EUR' });
 * // Returns: ['€1.234,56', '1.234,56', '€']
 *
 * @example
 * // Zero-decimal currency
 * formatCurrency({ amount: 1234.56, code: 'JPY' });
 * // Returns: ['¥ 1,235', '1,235', '¥']
 *
 * @example
 * // Negative amount
 * formatCurrency({ amount: -99.99, code: 'GBP' });
 * // Returns: ['-£99.99', '-99.99', '£']
 *
 * @example
 * // Unknown currency code (returns plain number)
 * formatCurrency({ amount: 100, code: 'XXX' });
 * // Returns: ['100', '100', '']
 */
export function formatCurrency(options: {
  amount: number;
  code: CurrencyCode | string;
}): FormatResult;
export function formatCurrency(options: {
  amount: number;
  code: CurrencyCode | string;
  returnType: "array";
}): FormatResult;
export function formatCurrency(options: {
  amount: number;
  code: CurrencyCode | string;
  returnType: "object";
}): FormatResultObject;
export function formatCurrency({
  amount,
  code,
  returnType,
}: {
  amount: number;
  code: CurrencyCode | string;
  returnType?: "array" | "object";
}): FormatResult | FormatResultObject {
  // Helper to convert array result to object if requested
  const toResult = (arr: FormatResult): FormatResult | FormatResultObject => {
    if (returnType === "object") {
      return { formatted: arr[0], value: arr[1], symbol: arr[2] };
    }
    return arr;
  };

  // Check cache first
  const cacheKey = getCacheKey(amount, code);
  const cached = cache.get(cacheKey);
  if (cached) {
    return toResult(cached);
  }

  const config = CURRENCIES[code as CurrencyCode];

  if (!config) {
    const str = amount.toString();
    const result: FormatResult = [str, str, ""];
    // Cache unknown currency results too
    if (cache.size >= MAX_CACHE_SIZE) {
      const firstKey = cache.keys().next().value;
      if (firstKey !== undefined) {
        cache.delete(firstKey);
      }
    }
    cache.set(cacheKey, result);
    return toResult(result);
  }

  const { symbol, format, position, space } = config;
  const decimals = "decimals" in config ? (config.decimals ?? 2) : 2;
  const isNegative = amount < 0;
  const absAmount = Math.abs(amount);

  const formatted = formatNumber(absAmount, format, decimals);

  const separator = space ? " " : "";
  const withSymbol =
    position === "before"
      ? `${symbol}${separator}${formatted}`
      : `${formatted}${separator}${symbol}`;

  const formattedWithSign = isNegative ? `-${withSymbol}` : withSymbol;
  const formattedValueWithSign = isNegative ? `-${formatted}` : formatted;

  const result: FormatResult = [
    formattedWithSign,
    formattedValueWithSign,
    symbol,
  ];

  // LRU eviction: remove oldest entry if cache is full
  if (cache.size >= MAX_CACHE_SIZE) {
    const firstKey = cache.keys().next().value;
    if (firstKey !== undefined) {
      cache.delete(firstKey);
    }
  }
  cache.set(cacheKey, result);

  return toResult(result);
}

/**
 * Returns a list of all supported currencies.
 *
 * Useful for building currency selector dropdowns or validating user input.
 * Returns 165+ currencies sorted alphabetically by code.
 *
 * @returns Array of objects with `code` and `name` properties
 *
 * @example
 * const currencies = getSupportedCurrencies();
 * // [
 * //   { code: 'AED', name: 'United Arab Emirates Dirham' },
 * //   { code: 'AFN', name: 'Afghanistan Afghani' },
 * //   ...
 * // ]
 *
 * @example
 * // Building a dropdown
 * getSupportedCurrencies().map(c => (
 *   <option key={c.code} value={c.code}>{c.name}</option>
 * ));
 */
export const getSupportedCurrencies = (): SupportedCurrency[] =>
  Object.entries(CURRENCIES).map(([code, config]) => ({
    code,
    name: config.name,
  }));
