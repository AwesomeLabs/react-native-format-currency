<!-- NOTE: Keep this README concise and copy/paste-friendly. -->

# react-native-format-currency

[![npm version](https://img.shields.io/npm/v/react-native-format-currency.svg)](https://www.npmjs.com/package/react-native-format-currency)
[![npm downloads](https://img.shields.io/npm/dm/react-native-format-currency.svg)](https://www.npmjs.com/package/react-native-format-currency)
[![Follow @AwesomeLabsLLC on X](https://img.shields.io/badge/follow-%40AwesomeLabsLLC-00b4d8?logo=x&logoColor=white)](https://x.com/AwesomeLabsLLC)

A lightweight currency formatter for **React Native** and **Expo**. Format amounts using ISO 4217 currency codes with correct symbol placement and common thousands/decimal separator styles.

- **Zero runtime deps** (pure JS/TS)
- **165+ currencies**
- **Typed** (TypeScript declarations included)
- **Fast** (memoized with a small LRU cache)

## Install

```sh
yarn add react-native-format-currency
```

```sh
npm install react-native-format-currency
```

```sh
pnpm add react-native-format-currency
```

## Quick start

```ts
import { formatCurrency } from "react-native-format-currency";

const [withSymbol, withoutSymbol, symbol] = formatCurrency({
  amount: 1234.56,
  code: "USD",
});

// withSymbol: "$1,234.56"
// withoutSymbol: "1,234.56"
// symbol: "$"
```

## API

### `formatCurrency({ amount, code })`

Formats a numeric amount for a given ISO 4217 currency code.

- **Params**
  - `amount: number`: the numeric amount (negative supported)
  - `code: string`: ISO 4217 currency code (e.g. `"USD"`, `"EUR"`, `"JPY"`)
- **Returns**
  - `[formattedWithSymbol, formattedWithoutSymbol, symbol]`

```ts
import { formatCurrency } from "react-native-format-currency";

formatCurrency({ amount: 1234.56, code: "ARS" });
// ["$ 1.234,56", "1.234,56", "$"]

formatCurrency({ amount: -99.99, code: "GBP" });
// ["-£99.99", "-99.99", "£"]
```

**Notes**
- Formatting is based on this package’s internal currency rules (symbol, separators, symbol position, decimals). It does **not** take a locale argument.
- For floating-point sensitive values, consider passing integers (e.g. cents) and dividing/rounding prior to formatting.

### `getSupportedCurrencies()`

Returns all supported currencies as `{ code, name }[]`.

```ts
import { getSupportedCurrencies } from "react-native-format-currency";

const currencies = getSupportedCurrencies();
// [{ code: "AED", name: "United Arab Emirates Dirham" }, ...]
```

### Cache helpers

`formatCurrency` memoizes results (LRU, max 100 entries) for speed.

```ts
import { clearFormatCache, getFormatCacheSize } from "react-native-format-currency";

console.log(getFormatCacheSize());
clearFormatCache();
```

### Currency data and types

```ts
import type { CurrencyCode, CurrencyConfig, FormatResult, SupportedCurrency } from "react-native-format-currency";
import { CURRENCIES } from "react-native-format-currency";
```

- `CURRENCIES`: full currency config map (symbols, separators, etc.)
- `CurrencyCode`: union of supported ISO currency codes

## Example app

The repo includes an Expo example in [`example/`](example/).

```sh
cd example
yarn install
yarn start
```

If Expo complains about your Node version, use an LTS-compatible Node version required by the Expo SDK you’re running (see Expo’s docs for the current requirement).

## Development

```sh
yarn install
yarn build
yarn test
```

## Contributing

- Please open an issue (or a PR) for bugs/feature requests.
- Keep changes small and add/adjust tests where relevant.

## Security

Please **do not** open public issues for security vulnerabilities. Prefer reporting privately via the project’s maintainer contact (see `package.json` / GitHub profile).

## License

MIT — see [`LICENSE`](LICENSE).