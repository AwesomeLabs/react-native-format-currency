# react-native-format-currency
A lightweight React Native international currency formatter. iOS/Android/Expo compatible.


## Installation
```sh
yarn add react-native-format-currency
```
OR
```sh
npm install --save react-native-format-currency
```

## Usage

```js
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { formatCurrency } from "react-native-format-currency";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.currencyRow}>
          ARS (Argentine Peso):{" "}
          {formatCurrency({ amount: 1234.56, code: "ARS" })}
        </Text>
        <Text style={styles.currencyRow}>
          AUD (Australian Dollar):{" "}
          {formatCurrency({ amount: 1234.56, code: "AUD" })}
        </Text>
        <Text style={styles.currencyRow}>
          BGN (Bulgarian Lev):{" "}
          {formatCurrency({ amount: 1234.56, code: "BGN" })}
        </Text>
        <Text style={styles.currencyRow}>
          BRL (Brazilian Real):{" "}
          {formatCurrency({ amount: 1234.56, code: "BRL" })}
        </Text>
        <Text style={styles.currencyRow}>
          CAD (Canadian Dollar):{" "}
          {formatCurrency({ amount: 1234.56, code: "CAD" })}
        </Text>
        <Text style={styles.currencyRow}>
          CLP (Chilean Peso):{" "}
          {formatCurrency({ amount: 1234.56, code: "CLP" })}
        </Text>
        <Text style={styles.currencyRow}>
          CNY (Yuan Renminbi):{" "}
          {formatCurrency({ amount: 1234.56, code: "CNY" })}
        </Text>
        <Text style={styles.currencyRow}>
          COP (Colombian Peso):{" "}
          {formatCurrency({ amount: 1234.56, code: "COP" })}
        </Text>
        <Text style={styles.currencyRow}>
          CZK (Czech Koruna):{" "}
          {formatCurrency({ amount: 1234.56, code: "CZK" })}
        </Text>
        <Text style={styles.currencyRow}>
          DKK (Danish Krone):{" "}
          {formatCurrency({ amount: 1234.56, code: "DKK" })}
        </Text>
        <Text style={styles.currencyRow}>
          EUR (Europen Union):{" "}
          {formatCurrency({ amount: 1234.56, code: "EUR" })}
        </Text>
        <Text style={styles.currencyRow}>
          HKD (Hong Kong Dollar):{" "}
          {formatCurrency({ amount: 1234.56, code: "HKD" })}
        </Text>
        <Text style={styles.currencyRow}>
          HRK (Croatian Kuna):{" "}
          {formatCurrency({ amount: 1234.56, code: "HRK" })}
        </Text>
        <Text style={styles.currencyRow}>
          HUF (Hungarian Forint):{" "}
          {formatCurrency({ amount: 1234.56, code: "HUF" })}
        </Text>
        <Text style={styles.currencyRow}>
          IDR (Indonesian Rupiah):{" "}
          {formatCurrency({ amount: 1234.56, code: "IDR" })}
        </Text>

        <Text style={styles.currencyRow}>
          INR (Indian Rupee):{" "}
          {formatCurrency({ amount: 1234.56, code: "INR" })}
        </Text>
        <Text style={styles.currencyRow}>
          ILS (New Israeli Shekel):{" "}
          {formatCurrency({ amount: 1234.56, code: "ILS" })}
        </Text>
        <Text style={styles.currencyRow}>
          ISK (Icelandic Krona):{" "}
          {formatCurrency({ amount: 1234.56, code: "ISK" })}
        </Text>
        <Text style={styles.currencyRow}>
          JPY (Yen): {formatCurrency({ amount: 1234.56, code: "JPY" })}
        </Text>
        <Text style={styles.currencyRow}>
          KRW (Won): {formatCurrency({ amount: 1234.56, code: "KRW" })}
        </Text>
        <Text style={styles.currencyRow}>
          MYR (Malaysian Ringgit):{" "}
          {formatCurrency({ amount: 1234.56, code: "MYR" })}
        </Text>
        <Text style={styles.currencyRow}>
          MXN (Mexican Peso):{" "}
          {formatCurrency({ amount: 1234.56, code: "MXN" })}
        </Text>
        <Text style={styles.currencyRow}>
          MAD (Moroccan Dirham):{" "}
          {formatCurrency({ amount: 1234.56, code: "MAD" })}
        </Text>
        <Text style={styles.currencyRow}>
          NZD (New Zealand Dollar):{" "}
          {formatCurrency({ amount: 1234.56, code: "NZD" })}
        </Text>
        <Text style={styles.currencyRow}>
          NOK (Norwegian Krone):{" "}
          {formatCurrency({ amount: 1234.56, code: "NOK" })}
        </Text>
        <Text style={styles.currencyRow}>
          PHP (Philippine Peso):{" "}
          {formatCurrency({ amount: 1234.56, code: "PHP" })}
        </Text>
        <Text style={styles.currencyRow}>
          PLN (Zloty): {formatCurrency({ amount: 1234.56, code: "PLN" })}
        </Text>
        <Text style={styles.currencyRow}>
          RON (Romanian New Leu):{" "}
          {formatCurrency({ amount: 1234.56, code: "RON" })}
        </Text>
        <Text style={styles.currencyRow}>
          RUB (Russian Ruble):{" "}
          {formatCurrency({ amount: 1234.56, code: "RUB" })}
        </Text>
        <Text style={styles.currencyRow}>
          SAR (Saudi Riyal):{" "}
          {formatCurrency({ amount: 1234.56, code: "SAR" })}
        </Text>
        <Text style={styles.currencyRow}>
          SGD (Singapore Dollar):{" "}
          {formatCurrency({ amount: 1234.56, code: "SGD" })}
        </Text>
        <Text style={styles.currencyRow}>
          ZAR (South African Rand):{" "}
          {formatCurrency({ amount: 1234.56, code: "ZAR" })}
        </Text>
        <Text style={styles.currencyRow}>
          SEK (Swedish Krona):{" "}
          {formatCurrency({ amount: 1234.56, code: "SEK" })}
        </Text>
        <Text style={styles.currencyRow}>
          CHF (Swiss Franc):{" "}
          {formatCurrency({ amount: 1234.56, code: "CHF" })}
        </Text>
        <Text style={styles.currencyRow}>
          TWD (New Taiwan Dollar):{" "}
          {formatCurrency({ amount: 1234.56, code: "TWD" })}
        </Text>
        <Text style={styles.currencyRow}>
          THB (Thai Baht): {formatCurrency({ amount: 1234.56, code: "THB" })}
        </Text>
        <Text style={styles.currencyRow}>
          TRY (Turkish Lira):{" "}
          {formatCurrency({ amount: 1234.56, code: "TRY" })}
        </Text>
        <Text style={styles.currencyRow}>
          GBP (Pound Sterling):{" "}
          {formatCurrency({ amount: 1234.56, code: "GBP" })}
        </Text>
        <Text style={styles.currencyRow}>
          USD (US Dollar): {formatCurrency({ amount: 1234.56, code: "USD" })}
        </Text>
        <Text style={styles.currencyRow}>
          VND (Vietamese Dong):{" "}
          {formatCurrency({ amount: 1234.56, code: "VND" })}
        </Text>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 100,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  scrollView: {
    paddingHorizontal: 40,
    paddingTop: 60,
    paddingBottom: 100,
  },
  currencyRow: {
    fontSize: 16,
    paddingVertical: 5,
  },
});

```

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| `amount` | `Number` | null | currency amount
| `code` | `String` | null | 3-letter ISO 4217 Currency Code


## Test
```sh
npm run test
```

## Contribute
Feel free to submit a PR if you'd like to help!


