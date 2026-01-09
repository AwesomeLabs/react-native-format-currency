/**
 * Configuration for a currency's formatting rules.
 *
 * @property name - Full name of the currency (e.g., "United States Dollar")
 * @property symbol - Currency symbol or code (e.g., "$", "€", "USD")
 * @property format - Thousands/decimal separator style: "comma" (1,234.56) or "period" (1.234,56)
 * @property position - Symbol placement: "before" ($100) or "after" (100€)
 * @property space - Whether to include a space between symbol and amount
 * @property decimals - Number of decimal places (defaults to 2 if not specified)
 */
export type CurrencyConfig = {
  name: string;
  symbol: string;
  format: "comma" | "period";
  position: "before" | "after";
  space: boolean;
  decimals?: number;
};

/**
 * Return type for formatCurrency function (array format).
 *
 * A tuple containing three strings:
 * - [0] Formatted amount with currency symbol (e.g., "$1,234.56")
 * - [1] Formatted amount without symbol (e.g., "1,234.56")
 * - [2] Currency symbol only (e.g., "$")
 *
 * @example
 * const [withSymbol, withoutSymbol, symbol] = formatCurrency({ amount: 1234.56, code: 'USD' });
 * // withSymbol: "$1,234.56"
 * // withoutSymbol: "1,234.56"
 * // symbol: "$"
 */
export type FormatResult = [string, string, string];

/**
 * Return type for formatCurrency function (object format).
 *
 * An object containing the formatted currency values:
 * - formatted: Formatted amount with currency symbol (e.g., "$1,234.56")
 * - value: Formatted amount without symbol (e.g., "1,234.56")
 * - symbol: Currency symbol only (e.g., "$")
 *
 * @example
 * const result = formatCurrency({ amount: 1234.56, code: 'USD', returnType: 'object' });
 * // result.formatted: "$1,234.56"
 * // result.value: "1,234.56"
 * // result.symbol: "$"
 */
export type FormatResultObject = {
  formatted: string;
  value: string;
  symbol: string;
};

/**
 * Represents a supported currency with its code and display name.
 */
export type SupportedCurrency = {
  /** ISO 4217 currency code (e.g., "USD", "EUR") */
  code: string;
  /** Full currency name (e.g., "United States Dollar") */
  name: string;
};
