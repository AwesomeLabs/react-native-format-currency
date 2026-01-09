# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2026-01-09

### Added
- Initial stable release
- Support for 165+ ISO 4217 currency codes
- `formatCurrency()` function with proper symbol placement, thousands separators, and decimal formatting
- `getSupportedCurrencies()` to list all available currencies
- `returnType` option to return results as object (`{ formatted, value, symbol }`) instead of array
- LRU cache (100 entries) for improved performance
- `clearFormatCache()` and `getFormatCacheSize()` cache utilities
- Full TypeScript support with exported types (`FormatResult`, `FormatResultObject`, `CurrencyCode`, `CurrencyConfig`, `SupportedCurrency`)
- Zero runtime dependencies

### Features
- Handles negative amounts
- Supports zero-decimal currencies (JPY, KRW)
- Supports 3-decimal currencies (BHD, KWD, OMR)
- Preserves extra decimal precision when provided
- Added option to return result as an object instead of array
- European format support (period for thousands, comma for decimals)

## [0.0.5] - 2024-01-30

### Added
- Added support for the following new currencies (#9, with thanks to @SYoder1):
  - United Arab Emirates Dirham
  - Bosnia and Herzegovina Convertible Mark
  - Moldovan Leu
  - Nigerian Naira
  - Serbian Dinar

## [0.0.4] - 2024-01-09

### Added
- Published `react-native-format-currency@0.0.4`
- Added support for the following new currencies (#8, with thanks to @SYoder1):
  - Barbadian Dollar
  - Bolivian Boliviano
  - Bahamian Dollar
  - Costa Rican Colón
  - Dominican Peso
  - Guatemalan Quetzal
  - Honduran Lempira
  - Jamaican Dollar
  - Nicaraguan Córdoba
  - Panamanian Balboa
  - Peruvian Nuevo Sol
  - Paraguayan Guaraní
  - Salvadoran Colón
  - Uruguayan Peso

### Fixed
- Added generated `.d.ts` declaration file to avoid TypeScript errors (#1, 4e3cda4)
