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
  },
  currencyRowText: {
    alignContent: "flex-start",
    color: fgColorPrimary,
    fontSize: 16,
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
  scrollView: {
    marginBottom: 40,
    marginTop: 40,
    paddingHorizontal: 5,
    width: "100%",
  },
});

const App = () => {
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
      <StatusBar />
    </SafeAreaView>
  );
};
export default App;
