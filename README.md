# react-native-format-currency

[![version](https://img.shields.io/npm/v/react-native-format-currency.svg)](https://www.npmjs.com/package/react-native-format-currency)
[![npm](https://img.shields.io/npm/dm/react-native-format-currency.svg)](https://www.npmjs.com/package/react-native-format-currency)
[![twitter](https://img.shields.io/twitter/follow/AwesomeLabsLLC.svg?style=flat-square&label=Follow%20%40AwesomeLabsLLC&logo=TWITTER&logoColor=FFFFFF&labelColor=00aced&logoWidth=15&color=lightgray)](https://twitter.com/intent/follow?screen_name=AwesomeLabsLLC)


A lightweight international currency formatter for React Native & Expo (iOS and Android). Check out the [example app](example/) for a working demo.

## Installation
```sh
$ yarn add react-native-format-currency
```
or
```sh
$ npm install react-native-format-currency
```

## Usage

Import library with 
```js
import { formatCurrency, getSupportedCurrencies } from "react-native-format-currency";
```

## Methods

### `formatCurrency({ amount: _number_, code: _string_})`

```sh
formatCurrency({ amount: 1234.56, code: "ARS" })
```
Formats a currency amount to specified currency code:
```js
const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] = formatCurrency({ amount: 1234.56, code: "ARS" })
```

__Props__

| Prop | Type | Default | Note |
|---|---|---|---|
| `amount` | `Number` | null | currency amount
| `code` | `String` | null | 3-letter [ISO 4217 Currency Code](https://en.wikipedia.org/wiki/ISO_4217)

__Returns:__

Array containing formatted currency string, formatted currency (without symbol), and currency symbol

```js
["$ 1.234,56", "1.234,56", "$"]
```


### `getSupportedCurrencies()`
```
getSupportedCurrencies()
```
Returns an array of currencies:

```js
[
  { code: "ARS", name: "Argentina Peso" },
  { code: "AUD", name: "Australia Dollar" },
  { code: "BGN", name: "Bulgaria Lev" },
  { code: "BRL", name: "Brazil Real" },
  { code: "CAD", name: "Canada Dollar" },
  { code: "CHF", name: "Switzerland Franc" },
  { code: "CLP", name: "Chile Peso" },
  { code: "CNY", name: "China Yuan Renminbi" },
  { code: "COP", name: "Colombia Peso" },
  { code: "CZK", name: "Czech Republic Koruna" },
  { code: "DKK", name: "Denmark Krone" },
  { code: "EUR", name: "Euro Member Countries" },
  { code: "GBP", name: "United Kingdom Pound" },
  { code: "HKD", name: "Hong Kong Dollar" },
    ...
]
```

## Example

Check out the [example app](example/) for a working demo.

```js
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  formatCurrency,
  getSupportedCurrencies,
} from "react-native-format-currency";

export default function App() {
  const [inputValue, setInputValue] = useState("1234.56");

  // get all of the supported currency codes
  const currencyCodes = getSupportedCurrencies();

  // loop through each currency code and show formatted value
  const renderItem = ({ item }) => {
    const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] =
      formatCurrency({ amount: Number(inputValue), code: item.code });

    return (
      <View style={styles.currencyRow}>
        <Text style={styles.currencyRowText}>
          {item.code} {symbol}
        </Text>
        <Text style={styles.currencyRowText}>{item.name}</Text>
        <Text style={styles.currencyRowText}>{valueFormattedWithSymbol}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          textAlign="center"
          value={inputValue}
          onChangeText={(value) => setInputValue(value)}
          keyboardType="decimal-pad"
        />
      </View>

      <FlatList
        style={styles.scrollView}
        data={currencyCodes}
        renderItem={renderItem}
        keyExtractor={(code) => code.code}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
  },
  inputContainer: {
    flex: 1,
    alignSelf: "stretch",
    marginTop: 10,
    marginBottom: 15,
  },
  input: {
    backgroundColor: "#eee",
    height: 38,
    fontSize: 30,
    fontWeight: "bold",
  },
  scrollView: {
    width: "100%",
    paddingHorizontal: 5,
    marginTop: 40,
    marginBottom: 40,
  },
  currencyRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  currencyRowText: {
    alignContent: "flex-start",
    color: "#000",
    fontSize: 16,
  },
});
```


## Testing
```sh
yarn build
yarn test
```

## Contribute
Feel free to submit a PR if you'd like to help!


