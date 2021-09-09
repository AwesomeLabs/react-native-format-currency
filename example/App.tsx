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

  const currencyCodes = getSupportedCurrencies();

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
