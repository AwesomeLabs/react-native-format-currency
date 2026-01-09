"use strict";
var expect = require("chai").expect;
var index = require("../dist/index.js");
describe("formatCurrency function test", () => {
  it("should return AED", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "AED" });
    expect(result).to.eql(["AED 0.56", "0.56", "AED"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "AED" });
    expect(result).to.eql(["AED 1,234.56", "1,234.56", "AED"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "AED" });
    expect(result).to.eql(["AED 1,234,567.89", "1,234,567.89", "AED"]);
  });

  it("should return AFN", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "AFN" });
    expect(result).to.eql(["1,234.56 ؋", "1,234.56", "؋"]);
  });

  it("should return ALL", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "ALL" });
    expect(result).to.eql(["1,234.56 L", "1,234.56", "L"]);
  });

  it("should return AMD", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "AMD" });
    expect(result).to.eql(["1,234.56 ֏", "1,234.56", "֏"]);
  });

  it("should return ANG", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "ANG" });
    expect(result).to.eql(["ƒ1,234.56", "1,234.56", "ƒ"]);
  });

  it("should return AOA", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "AOA" });
    expect(result).to.eql(["Kz 1,234.56", "1,234.56", "Kz"]);
  });

  it("should return ARS", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "ARS" });
    expect(result).to.eql(["$ 0,56", "0,56", "$"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "ARS" });
    expect(result).to.eql(["$ 1.234,56", "1.234,56", "$"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "ARS" });
    expect(result).to.eql(["$ 1.234.567,89", "1.234.567,89", "$"]);
  });

  it("should return AUD", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "AUD" });
    expect(result).to.eql(["$ 0.56", "0.56", "$"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "AUD" });
    expect(result).to.eql(["$ 1,234.56", "1,234.56", "$"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "AUD" });
    expect(result).to.eql(["$ 1,234,567.89", "1,234,567.89", "$"]);
  });

  it("should return AWG", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "AWG" });
    expect(result).to.eql(["ƒ1,234.56", "1,234.56", "ƒ"]);
  });

  it("should return AZN", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "AZN" });
    expect(result).to.eql(["1,234.56 ₼", "1,234.56", "₼"]);
  });

  it("should return BAM", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "BAM" });
    expect(result).to.eql(["KM 0.56", "0.56", "KM"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "BAM" });
    expect(result).to.eql(["KM 1,234.56", "1,234.56", "KM"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "BAM" });
    expect(result).to.eql(["KM 1,234,567.89", "1,234,567.89", "KM"]);
  });

  it("should return BBD", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "BBD" });
    expect(result).to.eql(["$0.56", "0.56", "$"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "BBD" });
    expect(result).to.eql(["$1,234.56", "1,234.56", "$"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "BBD" });
    expect(result).to.eql(["$1,234,567.89", "1,234,567.89", "$"]);
  });

  it("should return BDT", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "BDT" });
    expect(result).to.eql(["৳ 1,234.56", "1,234.56", "৳"]);
  });

  it("should return BGN", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "BGN" });
    expect(result).to.eql(["лв0.56", "0.56", "лв"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "BGN" });
    expect(result).to.eql(["лв1,234.56", "1,234.56", "лв"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "BGN" });
    expect(result).to.eql(["лв1,234,567.89", "1,234,567.89", "лв"]);
  });

  it("should return BHD", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "BHD" });
    expect(result).to.eql([".د.ب 1,234.560", "1,234.560", ".د.ب"]);
  });

  it("should return BIF", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "BIF" });
    expect(result).to.eql(["FBu 1,234.56", "1,234.56", "FBu"]);
  });

  it("should return BMD", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "BMD" });
    expect(result).to.eql(["$1,234.56", "1,234.56", "$"]);
  });

  it("should return BND", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "BND" });
    expect(result).to.eql(["$ 1,234.56", "1,234.56", "$"]);
  });

  it("should return BOB", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "BOB" });
    expect(result).to.eql(["$b 0.56", "0.56", "$b"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "BOB" });
    expect(result).to.eql(["$b 1,234.56", "1,234.56", "$b"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "BOB" });
    expect(result).to.eql(["$b 1,234,567.89", "1,234,567.89", "$b"]);
  });

  it("should return BRL", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "BRL" });
    expect(result).to.eql(["R$ 0,56", "0,56", "R$"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "BRL" });
    expect(result).to.eql(["R$ 1.234,56", "1.234,56", "R$"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "BRL" });
    expect(result).to.eql(["R$ 1.234.567,89", "1.234.567,89", "R$"]);
  });

  it("should return BSD", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "BSD" });
    expect(result).to.eql(["$0.56", "0.56", "$"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "BSD" });
    expect(result).to.eql(["$1,234.56", "1,234.56", "$"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "BSD" });
    expect(result).to.eql(["$1,234,567.89", "1,234,567.89", "$"]);
  });

  it("should return BTN", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "BTN" });
    expect(result).to.eql(["Nu. 1,234.56", "1,234.56", "Nu."]);
  });

  it("should return BWP", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "BWP" });
    expect(result).to.eql(["P 1,234.56", "1,234.56", "P"]);
  });

  it("should return BYN", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "BYN" });
    expect(result).to.eql(["1.234,56 Br", "1.234,56", "Br"]);
  });

  it("should return BZD", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "BZD" });
    expect(result).to.eql(["BZ$ 1,234.56", "1,234.56", "BZ$"]);
  });

  it("should return CAD", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "CAD" });
    expect(result).to.eql(["$ 0.56", "0.56", "$"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "CAD" });
    expect(result).to.eql(["$ 1,234.56", "1,234.56", "$"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "CAD" });
    expect(result).to.eql(["$ 1,234,567.89", "1,234,567.89", "$"]);
  });

  it("should return CDF", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "CDF" });
    expect(result).to.eql(["FC 1,234.56", "1,234.56", "FC"]);
  });

  it("should return CHF", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "CHF" });
    expect(result).to.eql(["fr. 0,56", "0,56", "fr."]);
    var result = index.formatCurrency({ amount: 1234.56, code: "CHF" });
    expect(result).to.eql(["fr. 1.234,56", "1.234,56", "fr."]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "CHF" });
    expect(result).to.eql(["fr. 1.234.567,89", "1.234.567,89", "fr."]);
  });

  it("should return CLP", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "CLP" });
    expect(result).to.eql(["$ 0.56", "0.56", "$"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "CLP" });
    expect(result).to.eql(["$ 1,234.56", "1,234.56", "$"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "CLP" });
    expect(result).to.eql(["$ 1,234,567.89", "1,234,567.89", "$"]);
  });

  it("should return CNY", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "CNY" });
    expect(result).to.eql(["¥ 0.56", "0.56", "¥"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "CNY" });
    expect(result).to.eql(["¥ 1,234.56", "1,234.56", "¥"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "CNY" });
    expect(result).to.eql(["¥ 1,234,567.89", "1,234,567.89", "¥"]);
  });

  it("should return COP", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "COP" });
    expect(result).to.eql(["$ 0.56", "0.56", "$"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "COP" });
    expect(result).to.eql(["$ 1,234.56", "1,234.56", "$"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "COP" });
    expect(result).to.eql(["$ 1,234,567.89", "1,234,567.89", "$"]);
  });

  it("should return CRC", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "CRC" });
    expect(result).to.eql(["₡0,56", "0,56", "₡"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "CRC" });
    expect(result).to.eql(["₡1.234,56", "1.234,56", "₡"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "CRC" });
    expect(result).to.eql(["₡1.234.567,89", "1.234.567,89", "₡"]);
  });

  it("should return CUC", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "CUC" });
    expect(result).to.eql(["CUC$ 1,234.56", "1,234.56", "CUC$"]);
  });

  it("should return CUP", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "CUP" });
    expect(result).to.eql(["₱ 1,234.56", "1,234.56", "₱"]);
  });

  it("should return CVE", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "CVE" });
    expect(result).to.eql(["$ 1,234.56", "1,234.56", "$"]);
  });

  it("should return CZK", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "CZK" });
    expect(result).to.eql(["0,56 Kč", "0,56", "Kč"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "CZK" });
    expect(result).to.eql(["1.234,56 Kč", "1.234,56", "Kč"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "CZK" });
    expect(result).to.eql(["1.234.567,89 Kč", "1.234.567,89", "Kč"]);
  });

  it("should return DJF", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "DJF" });
    expect(result).to.eql(["Fdj 1,234.56", "1,234.56", "Fdj"]);
  });

  it("should return DKK", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "DKK" });
    expect(result).to.eql(["kr. 0,56", "0,56", "kr."]);
    var result = index.formatCurrency({ amount: 1234.56, code: "DKK" });
    expect(result).to.eql(["kr. 1.234,56", "1.234,56", "kr."]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "DKK" });
    expect(result).to.eql(["kr. 1.234.567,89", "1.234.567,89", "kr."]);
  });

  it("should return DOP", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "DOP" });
    expect(result).to.eql(["RD$ 0.56", "0.56", "RD$"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "DOP" });
    expect(result).to.eql(["RD$ 1,234.56", "1,234.56", "RD$"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "DOP" });
    expect(result).to.eql(["RD$ 1,234,567.89", "1,234,567.89", "RD$"]);
  });

  it("should return DZD", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "DZD" });
    expect(result).to.eql(["1.234,56 د.ج", "1.234,56", "د.ج"]);
  });

  it("should return EGP", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "EGP" });
    expect(result).to.eql(["£ 1,234.56", "1,234.56", "£"]);
  });

  it("should return ERN", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "ERN" });
    expect(result).to.eql(["Nfk 1,234.56", "1,234.56", "Nfk"]);
  });

  it("should return ETB", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "ETB" });
    expect(result).to.eql(["Br 1,234.56", "1,234.56", "Br"]);
  });

  it("should return EUR", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "EUR" });
    expect(result).to.eql(["€0,56", "0,56", "€"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "EUR" });
    expect(result).to.eql(["€1.234,56", "1.234,56", "€"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "EUR" });
    expect(result).to.eql(["€1.234.567,89", "1.234.567,89", "€"]);
  });

  it("should return FJD", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "FJD" });
    expect(result).to.eql(["FJ$ 1,234.56", "1,234.56", "FJ$"]);
  });

  it("should return FKP", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "FKP" });
    expect(result).to.eql(["£1,234.56", "1,234.56", "£"]);
  });

  it("should return GBP", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "GBP" });
    expect(result).to.eql(["£0.56", "0.56", "£"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "GBP" });
    expect(result).to.eql(["£1,234.56", "1,234.56", "£"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "GBP" });
    expect(result).to.eql(["£1,234,567.89", "1,234,567.89", "£"]);
  });

  it("should return GEL", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "GEL" });
    expect(result).to.eql(["1,234.56 ₾", "1,234.56", "₾"]);
  });

  it("should return GHS", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "GHS" });
    expect(result).to.eql(["₵ 1,234.56", "1,234.56", "₵"]);
  });

  it("should return GIP", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "GIP" });
    expect(result).to.eql(["£1,234.56", "1,234.56", "£"]);
  });

  it("should return GMD", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "GMD" });
    expect(result).to.eql(["D 1,234.56", "1,234.56", "D"]);
  });

  it("should return GNF", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "GNF" });
    expect(result).to.eql(["FG 1,234.56", "1,234.56", "FG"]);
  });

  it("should return GTQ", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "GTQ" });
    expect(result).to.eql(["Q0.56", "0.56", "Q"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "GTQ" });
    expect(result).to.eql(["Q1,234.56", "1,234.56", "Q"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "GTQ" });
    expect(result).to.eql(["Q1,234,567.89", "1,234,567.89", "Q"]);
  });

  it("should return HKD", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "HKD" });
    expect(result).to.eql(["HK$ 0.56", "0.56", "HK$"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "HKD" });
    expect(result).to.eql(["HK$ 1,234.56", "1,234.56", "HK$"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "HKD" });
    expect(result).to.eql(["HK$ 1,234,567.89", "1,234,567.89", "HK$"]);
  });

  it("should return HNL", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "HNL" });
    expect(result).to.eql(["L 0.56", "0.56", "L"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "HNL" });
    expect(result).to.eql(["L 1,234.56", "1,234.56", "L"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "HNL" });
    expect(result).to.eql(["L 1,234,567.89", "1,234,567.89", "L"]);
  });

  it("should return HRK", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "HRK" });
    expect(result).to.eql(["0.56 kn", "0.56", "kn"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "HRK" });
    expect(result).to.eql(["1,234.56 kn", "1,234.56", "kn"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "HRK" });
    expect(result).to.eql(["1,234,567.89 kn", "1,234,567.89", "kn"]);
  });

  it("should return HTG", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "HTG" });
    expect(result).to.eql(["G 1,234.56", "1,234.56", "G"]);
  });

  it("should return HUF", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "HUF" });
    expect(result).to.eql(["0,56 Ft", "0,56", "Ft"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "HUF" });
    expect(result).to.eql(["1.234,56 Ft", "1.234,56", "Ft"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "HUF" });
    expect(result).to.eql(["1.234.567,89 Ft", "1.234.567,89", "Ft"]);
  });

  it("should return IDR", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "IDR" });
    expect(result).to.eql(["Rp 0.56", "0.56", "Rp"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "IDR" });
    expect(result).to.eql(["Rp 1,234.56", "1,234.56", "Rp"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "IDR" });
    expect(result).to.eql(["Rp 1,234,567.89", "1,234,567.89", "Rp"]);
  });

  it("should return ILS", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "ILS" });
    expect(result).to.eql(["₪ 0,56", "0,56", "₪"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "ILS" });
    expect(result).to.eql(["₪ 1.234,56", "1.234,56", "₪"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "ILS" });
    expect(result).to.eql(["₪ 1.234.567,89", "1.234.567,89", "₪"]);
  });

  it("should return INR", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "INR" });
    expect(result).to.eql(["₹ 0.56", "0.56", "₹"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "INR" });
    expect(result).to.eql(["₹ 1,234.56", "1,234.56", "₹"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "INR" });
    expect(result).to.eql(["₹ 1,234,567.89", "1,234,567.89", "₹"]);
  });

  it("should return IQD", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "IQD" });
    expect(result).to.eql(["ع.د 1,234.56", "1,234.56", "ع.د"]);
  });

  it("should return IRR", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "IRR" });
    expect(result).to.eql(["1,234.56 ﷼", "1,234.56", "﷼"]);
  });

  it("should return ISK", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "ISK" });
    expect(result).to.eql(["kr. 0,56", "0,56", "kr."]);
    var result = index.formatCurrency({ amount: 1234.56, code: "ISK" });
    expect(result).to.eql(["kr. 1.234,56", "1.234,56", "kr."]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "ISK" });
    expect(result).to.eql(["kr. 1.234.567,89", "1.234.567,89", "kr."]);
  });

  it("should return JMD", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "JMD" });
    expect(result).to.eql(["J$ 0.56", "0.56", "J$"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "JMD" });
    expect(result).to.eql(["J$ 1,234.56", "1,234.56", "J$"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "JMD" });
    expect(result).to.eql(["J$ 1,234,567.89", "1,234,567.89", "J$"]);
  });

  it("should return JOD", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "JOD" });
    expect(result).to.eql(["د.ا 1,234.56", "1,234.56", "د.ا"]);
  });

  it("should return JPY", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "JPY" });
    expect(result).to.eql(["¥ 0", "0", "¥"]);
    result = index.formatCurrency({ amount: 1234.56, code: "JPY" });
    expect(result).to.eql(["¥ 1,234", "1,234", "¥"]);
    result = index.formatCurrency({ amount: 1234567.89, code: "JPY" });
    expect(result).to.eql(["¥ 1,234,567", "1,234,567", "¥"]);
  });

  it("should return KES", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "KES" });
    expect(result).to.eql(["KSh 1,234.56", "1,234.56", "KSh"]);
  });

  it("should return KGS", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "KGS" });
    expect(result).to.eql(["1,234.56 с", "1,234.56", "с"]);
  });

  it("should return KHR", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "KHR" });
    expect(result).to.eql(["1,234.56 ៛", "1,234.56", "៛"]);
  });

  it("should return KMF", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "KMF" });
    expect(result).to.eql(["CF 1,234.56", "1,234.56", "CF"]);
  });

  it("should return KPW", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "KPW" });
    expect(result).to.eql(["₩ 1,234.56", "1,234.56", "₩"]);
  });

  it("should return KRW", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "KRW" });
    expect(result).to.eql(["₩ 0", "0", "₩"]);
    result = index.formatCurrency({ amount: 1234.56, code: "KRW" });
    expect(result).to.eql(["₩ 1,234", "1,234", "₩"]);
    result = index.formatCurrency({ amount: 1234567.89, code: "KRW" });
    expect(result).to.eql(["₩ 1,234,567", "1,234,567", "₩"]);
  });

  it("should return KWD", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "KWD" });
    expect(result).to.eql(["د.ك 1,234.560", "1,234.560", "د.ك"]);
  });

  it("should return KYD", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "KYD" });
    expect(result).to.eql(["CI$ 1,234.56", "1,234.56", "CI$"]);
  });

  it("should return KZT", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "KZT" });
    expect(result).to.eql(["1,234.56 ₸", "1,234.56", "₸"]);
  });

  it("should return LAK", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "LAK" });
    expect(result).to.eql(["1,234.56 ₭", "1,234.56", "₭"]);
  });

  it("should return LBP", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "LBP" });
    expect(result).to.eql(["ل.ل 1,234.56", "1,234.56", "ل.ل"]);
  });

  it("should return LKR", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "LKR" });
    expect(result).to.eql(["Rs 1,234.56", "1,234.56", "Rs"]);
  });

  it("should return LRD", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "LRD" });
    expect(result).to.eql(["L$ 1,234.56", "1,234.56", "L$"]);
  });

  it("should return LSL", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "LSL" });
    expect(result).to.eql(["L 1,234.56", "1,234.56", "L"]);
  });

  it("should return LYD", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "LYD" });
    expect(result).to.eql(["1,234.56 ل.د", "1,234.56", "ل.د"]);
  });

  it("should return MAD", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "MAD" });
    expect(result).to.eql(["0.56 .د.م.", "0.56", ".د.م."]);
    var result = index.formatCurrency({ amount: 1234.56, code: "MAD" });
    expect(result).to.eql(["1,234.56 .د.م.", "1,234.56", ".د.م."]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "MAD" });
    expect(result).to.eql(["1,234,567.89 .د.م.", "1,234,567.89", ".د.م."]);
  });

  it("should return MDL", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "MDL" });
    expect(result).to.eql(["0.56 L", "0.56", "L"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "MDL" });
    expect(result).to.eql(["1,234.56 L", "1,234.56", "L"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "MDL" });
    expect(result).to.eql(["1,234,567.89 L", "1,234,567.89", "L"]);
  });

  it("should return MGA", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "MGA" });
    expect(result).to.eql(["Ar 1,234.56", "1,234.56", "Ar"]);
  });

  it("should return MKD", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "MKD" });
    expect(result).to.eql(["ден 1,234.56", "1,234.56", "ден"]);
  });

  it("should return MMK", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "MMK" });
    expect(result).to.eql(["K 1,234.56", "1,234.56", "K"]);
  });

  it("should return MNT", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "MNT" });
    expect(result).to.eql(["1,234.56 ₮", "1,234.56", "₮"]);
  });

  it("should return MOP", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "MOP" });
    expect(result).to.eql(["MOP$ 1,234.56", "1,234.56", "MOP$"]);
  });

  it("should return MRU", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "MRU" });
    expect(result).to.eql(["UM 1,234.56", "1,234.56", "UM"]);
  });

  it("should return MUR", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "MUR" });
    expect(result).to.eql(["₨ 1,234.56", "1,234.56", "₨"]);
  });

  it("should return MVR", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "MVR" });
    expect(result).to.eql(["Rf 1,234.56", "1,234.56", "Rf"]);
  });

  it("should return MWK", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "MWK" });
    expect(result).to.eql(["MK 1,234.56", "1,234.56", "MK"]);
  });

  it("should return MXN", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "MXN" });
    expect(result).to.eql(["$ 0.56", "0.56", "$"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "MXN" });
    expect(result).to.eql(["$ 1,234.56", "1,234.56", "$"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "MXN" });
    expect(result).to.eql(["$ 1,234,567.89", "1,234,567.89", "$"]);
  });

  it("should return MYR", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "MYR" });
    expect(result).to.eql(["RM 0.56", "0.56", "RM"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "MYR" });
    expect(result).to.eql(["RM 1,234.56", "1,234.56", "RM"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "MYR" });
    expect(result).to.eql(["RM 1,234,567.89", "1,234,567.89", "RM"]);
  });

  it("should return MZN", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "MZN" });
    expect(result).to.eql(["MT 1,234.56", "1,234.56", "MT"]);
  });

  it("should return NAD", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "NAD" });
    expect(result).to.eql(["N$ 1,234.56", "1,234.56", "N$"]);
  });

  it("should return NGN", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "NGN" });
    expect(result).to.eql(["₦0.56", "0.56", "₦"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "NGN" });
    expect(result).to.eql(["₦1,234.56", "1,234.56", "₦"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "NGN" });
    expect(result).to.eql(["₦1,234,567.89", "1,234,567.89", "₦"]);
  });

  it("should return NIO", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "NIO" });
    expect(result).to.eql(["C$ 0.56", "0.56", "C$"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "NIO" });
    expect(result).to.eql(["C$ 1,234.56", "1,234.56", "C$"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "NIO" });
    expect(result).to.eql(["C$ 1,234,567.89", "1,234,567.89", "C$"]);
  });

  it("should return NOK", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "NOK" });
    expect(result).to.eql(["kr 0.56", "0.56", "kr"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "NOK" });
    expect(result).to.eql(["kr 1,234.56", "1,234.56", "kr"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "NOK" });
    expect(result).to.eql(["kr 1,234,567.89", "1,234,567.89", "kr"]);
  });

  it("should return NPR", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "NPR" });
    expect(result).to.eql(["रू 1,234.56", "1,234.56", "रू"]);
  });

  it("should return NZD", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "NZD" });
    expect(result).to.eql(["$ 0.56", "0.56", "$"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "NZD" });
    expect(result).to.eql(["$ 1,234.56", "1,234.56", "$"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "NZD" });
    expect(result).to.eql(["$ 1,234,567.89", "1,234,567.89", "$"]);
  });

  it("should return OMR", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "OMR" });
    expect(result).to.eql(["1,234.560 ر.ع.", "1,234.560", "ر.ع."]);
  });

  it("should return PAB", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "PAB" });
    expect(result).to.eql(["B/. 0.56", "0.56", "B/."]);
    var result = index.formatCurrency({ amount: 1234.56, code: "PAB" });
    expect(result).to.eql(["B/. 1,234.56", "1,234.56", "B/."]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "PAB" });
    expect(result).to.eql(["B/. 1,234,567.89", "1,234,567.89", "B/."]);
  });

  it("should return PEN", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "PEN" });
    expect(result).to.eql(["S/. 0.56", "0.56", "S/."]);
    var result = index.formatCurrency({ amount: 1234.56, code: "PEN" });
    expect(result).to.eql(["S/. 1,234.56", "1,234.56", "S/."]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "PEN" });
    expect(result).to.eql(["S/. 1,234,567.89", "1,234,567.89", "S/."]);
  });

  it("should return PGK", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "PGK" });
    expect(result).to.eql(["K 1,234.56", "1,234.56", "K"]);
  });

  it("should return PHP", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "PHP" });
    expect(result).to.eql(["₱ 0.56", "0.56", "₱"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "PHP" });
    expect(result).to.eql(["₱ 1,234.56", "1,234.56", "₱"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "PHP" });
    expect(result).to.eql(["₱ 1,234,567.89", "1,234,567.89", "₱"]);
  });

  it("should return PKR", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "PKR" });
    expect(result).to.eql(["₨ 1,234.56", "1,234.56", "₨"]);
  });

  it("should return PLN", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "PLN" });
    expect(result).to.eql(["0,56 zł", "0,56", "zł"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "PLN" });
    expect(result).to.eql(["1.234,56 zł", "1.234,56", "zł"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "PLN" });
    expect(result).to.eql(["1.234.567,89 zł", "1.234.567,89", "zł"]);
  });

  it("should return PYG", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "PYG" });
    expect(result).to.eql(["₲0.56", "0.56", "₲"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "PYG" });
    expect(result).to.eql(["₲1,234.56", "1,234.56", "₲"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "PYG" });
    expect(result).to.eql(["₲1,234,567.89", "1,234,567.89", "₲"]);
  });

  it("should return QAR", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "QAR" });
    expect(result).to.eql(["1,234.56 ر.ق", "1,234.56", "ر.ق"]);
  });

  it("should return RON", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "RON" });
    expect(result).to.eql(["0.56L", "0.56", "L"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "RON" });
    expect(result).to.eql(["1,234.56L", "1,234.56", "L"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "RON" });
    expect(result).to.eql(["1,234,567.89L", "1,234,567.89", "L"]);
  });

  it("should return RSD", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "RSD" });
    expect(result).to.eql(["0.56RSD", "0.56", "RSD"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "RSD" });
    expect(result).to.eql(["1,234.56RSD", "1,234.56", "RSD"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "RSD" });
    expect(result).to.eql(["1,234,567.89RSD", "1,234,567.89", "RSD"]);
  });

  it("should return RUB", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "RUB" });
    expect(result).to.eql(["0,56 p.", "0,56", "p."]);
    var result = index.formatCurrency({ amount: 1234.56, code: "RUB" });
    expect(result).to.eql(["1.234,56 p.", "1.234,56", "p."]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "RUB" });
    expect(result).to.eql(["1.234.567,89 p.", "1.234.567,89", "p."]);
  });

  it("should return RWF", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "RWF" });
    expect(result).to.eql(["FRw 1,234.56", "1,234.56", "FRw"]);
  });

  it("should return SAR", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "SAR" });
    expect(result).to.eql(["0.56 ﷼", "0.56", "﷼"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "SAR" });
    expect(result).to.eql(["1,234.56 ﷼", "1,234.56", "﷼"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "SAR" });
    expect(result).to.eql(["1,234,567.89 ﷼", "1,234,567.89", "﷼"]);
  });

  it("should return SBD", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "SBD" });
    expect(result).to.eql(["SI$ 1,234.56", "1,234.56", "SI$"]);
  });

  it("should return SCR", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "SCR" });
    expect(result).to.eql(["₨ 1,234.56", "1,234.56", "₨"]);
  });

  it("should return SDG", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "SDG" });
    expect(result).to.eql(["1,234.56 ج.س.", "1,234.56", "ج.س."]);
  });

  it("should return SEK", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "SEK" });
    expect(result).to.eql(["0,56 kr", "0,56", "kr"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "SEK" });
    expect(result).to.eql(["1.234,56 kr", "1.234,56", "kr"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "SEK" });
    expect(result).to.eql(["1.234.567,89 kr", "1.234.567,89", "kr"]);
  });

  it("should return SGD", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "SGD" });
    expect(result).to.eql(["$0.56", "0.56", "$"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "SGD" });
    expect(result).to.eql(["$1,234.56", "1,234.56", "$"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "SGD" });
    expect(result).to.eql(["$1,234,567.89", "1,234,567.89", "$"]);
  });

  it("should return SHP", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "SHP" });
    expect(result).to.eql(["£1,234.56", "1,234.56", "£"]);
  });

  it("should return SLL", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "SLL" });
    expect(result).to.eql(["Le 1,234.56", "1,234.56", "Le"]);
  });

  it("should return SOS", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "SOS" });
    expect(result).to.eql(["S 1,234.56", "1,234.56", "S"]);
  });

  it("should return SRD", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "SRD" });
    expect(result).to.eql(["$ 1,234.56", "1,234.56", "$"]);
  });

  it("should return STN", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "STN" });
    expect(result).to.eql(["Db 1,234.56", "1,234.56", "Db"]);
  });

  it("should return SVC", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "SVC" });
    expect(result).to.eql(["₡0.56", "0.56", "₡"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "SVC" });
    expect(result).to.eql(["₡1,234.56", "1,234.56", "₡"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "SVC" });
    expect(result).to.eql(["₡1,234,567.89", "1,234,567.89", "₡"]);
  });

  it("should return SYP", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "SYP" });
    expect(result).to.eql(["£ 1,234.56", "1,234.56", "£"]);
  });

  it("should return SZL", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "SZL" });
    expect(result).to.eql(["L 1,234.56", "1,234.56", "L"]);
  });

  it("should return THB", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "THB" });
    expect(result).to.eql(["0.56 ฿", "0.56", "฿"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "THB" });
    expect(result).to.eql(["1,234.56 ฿", "1,234.56", "฿"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "THB" });
    expect(result).to.eql(["1,234,567.89 ฿", "1,234,567.89", "฿"]);
  });

  it("should return TJS", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "TJS" });
    expect(result).to.eql(["SM 1,234.56", "1,234.56", "SM"]);
  });

  it("should return TMT", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "TMT" });
    expect(result).to.eql(["m 1,234.56", "1,234.56", "m"]);
  });

  it("should return TND", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "TND" });
    expect(result).to.eql(["1.234,56 د.ت", "1.234,56", "د.ت"]);
  });

  it("should return TOP", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "TOP" });
    expect(result).to.eql(["T$ 1,234.56", "1,234.56", "T$"]);
  });

  it("should return TRY", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "TRY" });
    expect(result).to.eql(["0.56 ₺", "0.56", "₺"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "TRY" });
    expect(result).to.eql(["1,234.56 ₺", "1,234.56", "₺"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "TRY" });
    expect(result).to.eql(["1,234,567.89 ₺", "1,234,567.89", "₺"]);
  });

  it("should return TTD", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "TTD" });
    expect(result).to.eql(["TT$ 1,234.56", "1,234.56", "TT$"]);
  });

  it("should return TWD", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "TWD" });
    expect(result).to.eql(["元 0.56", "0.56", "元"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "TWD" });
    expect(result).to.eql(["元 1,234.56", "1,234.56", "元"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "TWD" });
    expect(result).to.eql(["元 1,234,567.89", "1,234,567.89", "元"]);
  });

  it("should return TZS", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "TZS" });
    expect(result).to.eql(["TSh 1,234.56", "1,234.56", "TSh"]);
  });

  it("should return UAH", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "UAH" });
    expect(result).to.eql(["1.234,56 ₴", "1.234,56", "₴"]);
  });

  it("should return UGX", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "UGX" });
    expect(result).to.eql(["USh 1,234.56", "1,234.56", "USh"]);
  });

  it("should return USD", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "USD" });
    expect(result).to.eql(["$0.56", "0.56", "$"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "USD" });
    expect(result).to.eql(["$1,234.56", "1,234.56", "$"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "USD" });
    expect(result).to.eql(["$1,234,567.89", "1,234,567.89", "$"]);
    var result = index.formatCurrency({ amount: -1234567.89, code: "USD" });
    expect(result).to.eql(["-$1,234,567.89", "-1,234,567.89", "$"]);
    var result = index.formatCurrency({ amount: 1234.5, code: "USD" });
    expect(result).to.eql(["$1,234.50", "1,234.50", "$"]);
  });

  it("should return UYU", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "UYU" });
    expect(result).to.eql(["$U0,56", "0,56", "$U"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "UYU" });
    expect(result).to.eql(["$U1.234,56", "1.234,56", "$U"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "UYU" });
    expect(result).to.eql(["$U1.234.567,89", "1.234.567,89", "$U"]);
  });

  it("should return UZS", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "UZS" });
    expect(result).to.eql(["1,234.56 so'm", "1,234.56", "so'm"]);
  });

  it("should return VES", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "VES" });
    expect(result).to.eql(["Bs. 1,234.56", "1,234.56", "Bs."]);
  });

  it("should return VND", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "VND" });
    expect(result).to.eql(["0,56 ₫", "0,56", "₫"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "VND" });
    expect(result).to.eql(["1.234,56 ₫", "1.234,56", "₫"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "VND" });
    expect(result).to.eql(["1.234.567,89 ₫", "1.234.567,89", "₫"]);
  });

  it("should return VUV", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "VUV" });
    expect(result).to.eql(["VT 1,234.56", "1,234.56", "VT"]);
  });

  it("should return WST", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "WST" });
    expect(result).to.eql(["WS$ 1,234.56", "1,234.56", "WS$"]);
  });

  it("should return XAF", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "XAF" });
    expect(result).to.eql(["FCFA 1,234.56", "1,234.56", "FCFA"]);
  });

  it("should return XCD", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "XCD" });
    expect(result).to.eql(["EC$ 1,234.56", "1,234.56", "EC$"]);
  });

  it("should return XOF", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "XOF" });
    expect(result).to.eql(["CFA 1,234.56", "1,234.56", "CFA"]);
  });

  it("should return XPF", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "XPF" });
    expect(result).to.eql(["₣ 1,234.56", "1,234.56", "₣"]);
  });

  it("should return YER", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "YER" });
    expect(result).to.eql(["1,234.56 ﷼", "1,234.56", "﷼"]);
  });

  it("should return ZAR", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "ZAR" });
    expect(result).to.eql(["R 0.56", "0.56", "R"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "ZAR" });
    expect(result).to.eql(["R 1,234.56", "1,234.56", "R"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "ZAR" });
    expect(result).to.eql(["R 1,234,567.89", "1,234,567.89", "R"]);
  });

  it("should return ZMW", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "ZMW" });
    expect(result).to.eql(["ZK 1,234.56", "1,234.56", "ZK"]);
  });

  it("should return ZWL", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "ZWL" });
    expect(result).to.eql(["Z$ 1,234.56", "1,234.56", "Z$"]);
  });

  it("should return DEFAULT", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "ZZZ" });
    expect(result).to.eql(["0.56", "0.56", ""]);
    var result = index.formatCurrency({ amount: 1234.56, code: "ZZZ" });
    expect(result).to.eql(["1234.56", "1234.56", ""]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "ZZ" });
    expect(result).to.eql(["1234567.89", "1234567.89", ""]);
  });
});

describe("formatCurrency edge cases", () => {
  it("should handle zero values with consistent 2 decimal places", () => {
    var result = index.formatCurrency({ amount: 0, code: "USD" });
    expect(result).to.eql(["$0.00", "0.00", "$"]);

    result = index.formatCurrency({ amount: 0, code: "EUR" });
    expect(result).to.eql(["€0,00", "0,00", "€"]);

    result = index.formatCurrency({ amount: 0, code: "GBP" });
    expect(result).to.eql(["£0.00", "0.00", "£"]);
  });

  it("should handle very large numbers", () => {
    var result = index.formatCurrency({ amount: 1000000000, code: "USD" });
    expect(result).to.eql(["$1,000,000,000.00", "1,000,000,000.00", "$"]);

    result = index.formatCurrency({ amount: 999999999999.99, code: "USD" });
    expect(result).to.eql(["$999,999,999,999.99", "999,999,999,999.99", "$"]);

    result = index.formatCurrency({ amount: 1000000000000, code: "EUR" });
    expect(result).to.eql([
      "€1.000.000.000.000,00",
      "1.000.000.000.000,00",
      "€",
    ]);
  });

  it("should handle small decimal values preserving 3+ decimals", () => {
    var result = index.formatCurrency({ amount: 0.01, code: "USD" });
    expect(result).to.eql(["$0.01", "0.01", "$"]);

    result = index.formatCurrency({ amount: 0.001, code: "USD" });
    expect(result).to.eql(["$0.001", "0.001", "$"]);

    result = index.formatCurrency({ amount: 0.1, code: "USD" });
    expect(result).to.eql(["$0.10", "0.10", "$"]);

    result = index.formatCurrency({ amount: 0.99, code: "USD" });
    expect(result).to.eql(["$0.99", "0.99", "$"]);

    result = index.formatCurrency({ amount: 0.999, code: "USD" });
    expect(result).to.eql(["$0.999", "0.999", "$"]);

    result = index.formatCurrency({ amount: 123.456, code: "USD" });
    expect(result).to.eql(["$123.456", "123.456", "$"]);
  });

  it("should pad single decimal place values with trailing zero", () => {
    var result = index.formatCurrency({ amount: 1234.5, code: "USD" });
    expect(result).to.eql(["$1,234.50", "1,234.50", "$"]);

    result = index.formatCurrency({ amount: 100.5, code: "USD" });
    expect(result).to.eql(["$100.50", "100.50", "$"]);

    result = index.formatCurrency({ amount: 0.5, code: "USD" });
    expect(result).to.eql(["$0.50", "0.50", "$"]);

    result = index.formatCurrency({ amount: 1234.5, code: "EUR" });
    expect(result).to.eql(["€1.234,50", "1.234,50", "€"]);

    result = index.formatCurrency({ amount: 100.5, code: "EUR" });
    expect(result).to.eql(["€100,50", "100,50", "€"]);
  });

  it("should handle integer values with .00 suffix", () => {
    var result = index.formatCurrency({ amount: 1234, code: "USD" });
    expect(result).to.eql(["$1,234.00", "1,234.00", "$"]);

    result = index.formatCurrency({ amount: 1000000, code: "USD" });
    expect(result).to.eql(["$1,000,000.00", "1,000,000.00", "$"]);

    result = index.formatCurrency({ amount: 1, code: "USD" });
    expect(result).to.eql(["$1.00", "1.00", "$"]);

    result = index.formatCurrency({ amount: 1234, code: "EUR" });
    expect(result).to.eql(["€1.234,00", "1.234,00", "€"]);
  });

  it("should handle NaN input", () => {
    var result = index.formatCurrency({ amount: NaN, code: "USD" });
    expect(result).to.eql(["$NaN", "NaN", "$"]);

    result = index.formatCurrency({ amount: NaN, code: "EUR" });
    expect(result).to.eql(["€NaN", "NaN", "€"]);
  });

  it("should handle Infinity input", () => {
    var result = index.formatCurrency({ amount: Infinity, code: "USD" });
    expect(result).to.eql(["$Infinity", "Infinity", "$"]);

    result = index.formatCurrency({ amount: -Infinity, code: "USD" });
    expect(result).to.eql(["-$Infinity", "-Infinity", "$"]);
  });

  it("should handle negative zero", () => {
    var result = index.formatCurrency({ amount: -0, code: "USD" });
    expect(result).to.eql(["$0.00", "0.00", "$"]);
  });

  it("should preserve very small numbers with 3+ decimal places", () => {
    var result = index.formatCurrency({ amount: 0.0001, code: "USD" });
    expect(result).to.eql(["$0.0001", "0.0001", "$"]);

    result = index.formatCurrency({ amount: 0.00001, code: "USD" });
    expect(result).to.eql(["$0.00001", "0.00001", "$"]);

    result = index.formatCurrency({ amount: 0.005, code: "USD" });
    expect(result).to.eql(["$0.005", "0.005", "$"]);
  });

  it("should handle negative values across different currency formats", () => {
    var result = index.formatCurrency({ amount: -1234.56, code: "EUR" });
    expect(result).to.eql(["-€1.234,56", "-1.234,56", "€"]);

    result = index.formatCurrency({ amount: -1234.56, code: "GBP" });
    expect(result).to.eql(["-£1,234.56", "-1,234.56", "£"]);

    result = index.formatCurrency({ amount: -0.99, code: "USD" });
    expect(result).to.eql(["-$0.99", "-0.99", "$"]);

    result = index.formatCurrency({ amount: -1234.56, code: "THB" });
    expect(result).to.eql(["-1,234.56 ฿", "-1,234.56", "฿"]);
  });

  it("should handle decimal precision for period format currencies", () => {
    var result = index.formatCurrency({ amount: 1234.5, code: "BRL" });
    expect(result).to.eql(["R$ 1.234,50", "1.234,50", "R$"]);

    result = index.formatCurrency({ amount: 1234.05, code: "BRL" });
    expect(result).to.eql(["R$ 1.234,05", "1.234,05", "R$"]);

    result = index.formatCurrency({ amount: 1234.5, code: "PLN" });
    expect(result).to.eql(["1.234,50 zł", "1.234,50", "zł"]);
  });
});

describe("formatCurrency ISO 4217 decimal places", () => {
  it("should format JPY with 0 decimal places", () => {
    var result = index.formatCurrency({ amount: 1234, code: "JPY" });
    expect(result).to.eql(["¥ 1,234", "1,234", "¥"]);

    result = index.formatCurrency({ amount: 1234.56, code: "JPY" });
    expect(result).to.eql(["¥ 1,234", "1,234", "¥"]);

    result = index.formatCurrency({ amount: 0, code: "JPY" });
    expect(result).to.eql(["¥ 0", "0", "¥"]);

    result = index.formatCurrency({ amount: -5000, code: "JPY" });
    expect(result).to.eql(["-¥ 5,000", "-5,000", "¥"]);
  });

  it("should format KRW with 0 decimal places", () => {
    var result = index.formatCurrency({ amount: 1234, code: "KRW" });
    expect(result).to.eql(["₩ 1,234", "1,234", "₩"]);

    result = index.formatCurrency({ amount: 1234.99, code: "KRW" });
    expect(result).to.eql(["₩ 1,234", "1,234", "₩"]);

    result = index.formatCurrency({ amount: 1000000, code: "KRW" });
    expect(result).to.eql(["₩ 1,000,000", "1,000,000", "₩"]);
  });

  it("should format BHD with 3 decimal places", () => {
    var result = index.formatCurrency({ amount: 1234.567, code: "BHD" });
    expect(result).to.eql([".د.ب 1,234.567", "1,234.567", ".د.ب"]);

    result = index.formatCurrency({ amount: 1234.5, code: "BHD" });
    expect(result).to.eql([".د.ب 1,234.500", "1,234.500", ".د.ب"]);

    result = index.formatCurrency({ amount: 1234, code: "BHD" });
    expect(result).to.eql([".د.ب 1,234.000", "1,234.000", ".د.ب"]);

    result = index.formatCurrency({ amount: 0.001, code: "BHD" });
    expect(result).to.eql([".د.ب 0.001", "0.001", ".د.ب"]);
  });

  it("should format KWD with 3 decimal places", () => {
    var result = index.formatCurrency({ amount: 1234.567, code: "KWD" });
    expect(result).to.eql(["د.ك 1,234.567", "1,234.567", "د.ك"]);

    result = index.formatCurrency({ amount: 99.9, code: "KWD" });
    expect(result).to.eql(["د.ك 99.900", "99.900", "د.ك"]);

    result = index.formatCurrency({ amount: -50.5, code: "KWD" });
    expect(result).to.eql(["-د.ك 50.500", "-50.500", "د.ك"]);
  });

  it("should format OMR with 3 decimal places", () => {
    var result = index.formatCurrency({ amount: 1234.567, code: "OMR" });
    expect(result).to.eql(["1,234.567 ر.ع.", "1,234.567", "ر.ع."]);

    result = index.formatCurrency({ amount: 1234.5, code: "OMR" });
    expect(result).to.eql(["1,234.500 ر.ع.", "1,234.500", "ر.ع."]);

    result = index.formatCurrency({ amount: 0, code: "OMR" });
    expect(result).to.eql(["0.000 ر.ع.", "0.000", "ر.ع."]);
  });

  it("should preserve extra decimals beyond currency standard", () => {
    var result = index.formatCurrency({ amount: 1234.5678, code: "BHD" });
    expect(result).to.eql([".د.ب 1,234.5678", "1,234.5678", ".د.ب"]);

    result = index.formatCurrency({ amount: 1234.56789, code: "USD" });
    expect(result).to.eql(["$1,234.56789", "1,234.56789", "$"]);
  });
});

describe("Additional edge cases", () => {
  beforeEach(() => {
    index.clearFormatCache();
  });

  it("should handle RTL currency symbols correctly", () => {
    // Saudi Riyal (symbol after amount)
    var result = index.formatCurrency({ amount: 1234.56, code: "SAR" });
    expect(result).to.eql(["1,234.56 ﷼", "1,234.56", "﷼"]);

    // UAE Dirham (symbol before amount)
    result = index.formatCurrency({ amount: 1234.56, code: "AED" });
    expect(result).to.eql(["AED 1,234.56", "1,234.56", "AED"]);

    // Israeli Shekel
    result = index.formatCurrency({ amount: 1234.56, code: "ILS" });
    expect(result).to.eql(["₪ 1.234,56", "1.234,56", "₪"]);

    // Bahrain Dinar (RTL with 3 decimals)
    result = index.formatCurrency({ amount: 100, code: "BHD" });
    expect(result).to.eql([".د.ب 100.000", "100.000", ".د.ب"]);
  });

  it("should handle extremely precise decimals", () => {
    var result = index.formatCurrency({ amount: 0.000001, code: "USD" });
    expect(result).to.eql(["$0.000001", "0.000001", "$"]);

    result = index.formatCurrency({ amount: 0.123456789, code: "USD" });
    expect(result).to.eql(["$0.123456789", "0.123456789", "$"]);

    result = index.formatCurrency({ amount: 1.000000001, code: "EUR" });
    expect(result).to.eql(["€1,000000001", "1,000000001", "€"]);
  });

  it("should handle unknown currency codes gracefully", () => {
    var result = index.formatCurrency({ amount: 1234.56, code: "XXX" });
    expect(result).to.eql(["1234.56", "1234.56", ""]);

    result = index.formatCurrency({ amount: 1234.56, code: "INVALID" });
    expect(result).to.eql(["1234.56", "1234.56", ""]);

    result = index.formatCurrency({ amount: 1234.56, code: "" });
    expect(result).to.eql(["1234.56", "1234.56", ""]);

    result = index.formatCurrency({ amount: -99.99, code: "FAKE" });
    expect(result).to.eql(["-99.99", "-99.99", ""]);
  });

  it("should handle very large numbers correctly", () => {
    // Quadrillion
    var result = index.formatCurrency({ amount: 1000000000000000, code: "USD" });
    expect(result).to.eql(["$1,000,000,000,000,000.00", "1,000,000,000,000,000.00", "$"]);

    // Large number with decimals
    result = index.formatCurrency({ amount: 999999999999.99, code: "EUR" });
    expect(result).to.eql(["€999.999.999.999,99", "999.999.999.999,99", "€"]);
  });

  it("should handle scientific notation edge cases", () => {
    // Very small number that JS might represent in scientific notation
    var result = index.formatCurrency({ amount: 1e-10, code: "USD" });
    expect(result[0]).to.include("$");
    expect(result[2]).to.eql("$");

    // Large number
    var result2 = index.formatCurrency({ amount: 1e15, code: "USD" });
    expect(result2[0]).to.include("$");
    expect(result2[0]).to.include(",");
  });

  it("should return consistent results for repeated calls (memoization)", () => {
    var result1 = index.formatCurrency({ amount: 1234.56, code: "USD" });
    var result2 = index.formatCurrency({ amount: 1234.56, code: "USD" });
    var result3 = index.formatCurrency({ amount: 1234.56, code: "USD" });

    expect(result1).to.eql(result2);
    expect(result2).to.eql(result3);
    expect(result1).to.eql(["$1,234.56", "1,234.56", "$"]);
  });

  it("should handle cache operations correctly", () => {
    index.clearFormatCache();
    expect(index.getFormatCacheSize()).to.eql(0);

    index.formatCurrency({ amount: 100, code: "USD" });
    expect(index.getFormatCacheSize()).to.eql(1);

    index.formatCurrency({ amount: 200, code: "USD" });
    expect(index.getFormatCacheSize()).to.eql(2);

    // Same call should not increase cache size
    index.formatCurrency({ amount: 100, code: "USD" });
    expect(index.getFormatCacheSize()).to.eql(2);

    index.clearFormatCache();
    expect(index.getFormatCacheSize()).to.eql(0);
  });

  it("should evict old entries when cache is full", () => {
    index.clearFormatCache();

    // Fill cache beyond limit (100 entries)
    for (var i = 0; i < 150; i++) {
      index.formatCurrency({ amount: i, code: "USD" });
    }

    // Cache should be capped at 100
    expect(index.getFormatCacheSize()).to.eql(100);
  });
});

describe("getSupportedCurrencies", () => {
  it("should return an array of currency objects", () => {
    var currencies = index.getSupportedCurrencies();
    expect(currencies).to.be.an("array");
    expect(currencies.length).to.be.greaterThan(100);
  });

  it("should include common currencies", () => {
    var currencies = index.getSupportedCurrencies();
    var codes = currencies.map(function (c) {
      return c.code;
    });

    expect(codes).to.include("USD");
    expect(codes).to.include("EUR");
    expect(codes).to.include("GBP");
    expect(codes).to.include("JPY");
  });

  it("should have code and name properties", () => {
    var currencies = index.getSupportedCurrencies();
    var usd = currencies.find(function (c) {
      return c.code === "USD";
    });

    expect(usd).to.have.property("code", "USD");
    expect(usd).to.have.property("name", "United States Dollar");
  });

  it("should not include invalid/obsolete codes", () => {
    var currencies = index.getSupportedCurrencies();
    var codes = currencies.map(function (c) {
      return c.code;
    });

    // These are explicitly excluded in the source
    expect(codes).to.not.include("GGP"); // Guernsey - uses GBP
    expect(codes).to.not.include("XDR"); // IMF Special Drawing Rights
    expect(codes).to.not.include("VEF"); // Obsolete Venezuela Bolivar
  });
});
