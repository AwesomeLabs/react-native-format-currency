import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  formatCurrency,
  getSupportedCurrencies,
} from "react-native-format-currency";

const bgColorPrimary = "#fff";
const bgColorSecondary = "#eee";
const fgColorPrimary = "#000";

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    backgroundColor: bgColorPrimary,
    flex: 1,
  },
  currencyRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
  currencyRowAlternate: {
    backgroundColor: bgColorSecondary,
  },
  currencyRowText: {
    alignContent: "flex-start",
    color: fgColorPrimary,
    fontSize: 16,
  },
  currencyName: {
    color: fgColorPrimary,
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "left",
  },
  input: {
    backgroundColor: bgColorSecondary,
    fontSize: 30,
    fontWeight: "bold",
    height: 38,
  },
  inputContainer: {
    alignSelf: "stretch",
    flex: 1,
    marginBottom: 15,
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 0,
    marginTop: 0,
    alignSelf: "center",
  },
  scrollView: {
    marginBottom: 0,
    marginTop: 40,
    paddingHorizontal: 5,
    width: "100%",
  },
});

const App = () => {
  const [inputValue, setInputValue] = useState("1234.56");

  const currencyCodes = getSupportedCurrencies();

  const renderItem = ({ item, index }) => {
    const [valueFormattedWithSymbol, valueFormatted] = formatCurrency({
      amount: Number(inputValue),
      code: item.code,
    });

    const isAlternate = index % 2 === 1;

    return (
      <View
        style={[styles.currencyRow, isAlternate && styles.currencyRowAlternate]}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.currencyName}>{item.name}</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.currencyRowText}>{item.code}</Text>
            <Text style={styles.currencyRowText}>{valueFormatted}</Text>
            <Text style={styles.currencyRowText}>
              {valueFormattedWithSymbol}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.inputLabel}>Enter value to format:</Text>

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
        <StatusBar />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default App;
