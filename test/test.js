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
    expect(result).to.eql(['$0.56', '0.56', '$' ]);
    var result = index.formatCurrency({ amount: 1234.56, code: "BBD" });
    expect(result).to.eql(['$1,234.56', '1,234.56', '$' ]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "BBD" });
    expect(result).to.eql(['$1,234,567.89', '1,234,567.89', '$' ]);
  });

  it("should return BOB", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "BOB" });
    expect(result).to.eql(['$b 0.56', '0.56', '$b' ]);
    var result = index.formatCurrency({ amount: 1234.56, code: "BOB" });
    expect(result).to.eql(['$b 1,234.56', '1,234.56', '$b' ]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "BOB" });
    expect(result).to.eql(["$b 1,234,567.89", "1,234,567.89", "$b"]);
  });

  it("should return BGN", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "BGN" });
    expect(result).to.eql(["лв0.56", "0.56", "лв"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "BGN" });
    expect(result).to.eql(["лв1,234.56", "1,234.56", "лв"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "BGN" });
    expect(result).to.eql(["лв1,234,567.89", "1,234,567.89", "лв"]);
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
    expect(result).to.eql(['$0.56', '0.56', '$' ]);
    var result = index.formatCurrency({ amount: 1234.56, code: "BSD" });
    expect(result).to.eql(['$1,234.56', '1,234.56', '$' ]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "BSD" });
    expect(result).to.eql(["$1,234,567.89", "1,234,567.89", "$"]);
  });

  it("should return CAD", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "CAD" });
    expect(result).to.eql(["$ 0.56", "0.56", "$"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "CAD" });
    expect(result).to.eql(["$ 1,234.56", "1,234.56", "$"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "CAD" });
    expect(result).to.eql(["$ 1,234,567.89", "1,234,567.89", "$"]);
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
    expect(result).to.eql(['₡0,56', '0,56', '₡' ]);
    var result = index.formatCurrency({ amount: 1234.56, code: "CRC" });
    expect(result).to.eql(['₡1.234,56', '1.234,56', '₡' ]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "CRC" });
    expect(result).to.eql(["₡1.234.567,89", "1.234.567,89", "₡"]);
  });

  it("should return CZK", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "CZK" });
    expect(result).to.eql(["0,56 Kč", "0,56", "Kč"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "CZK" });
    expect(result).to.eql(["1.234,56 Kč", "1.234,56", "Kč"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "CZK" });
    expect(result).to.eql(["1.234.567,89 Kč", "1.234.567,89", "Kč"]);
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
    expect(result).to.eql(['RD$ 0.56', '0.56', 'RD$' ]);
    var result = index.formatCurrency({ amount: 1234.56, code: "DOP" });
    expect(result).to.eql(['RD$ 1,234.56', '1,234.56', 'RD$' ]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "DOP" });
    expect(result).to.eql(["RD$ 1,234,567.89", "1,234,567.89", "RD$"]);
  });

  it("should return EUR", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "EUR" });
    expect(result).to.eql(["€0,56", "0,56", "€"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "EUR" });
    expect(result).to.eql(["€1.234,56", "1.234,56", "€"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "EUR" });
    expect(result).to.eql(["€1.234.567,89", "1.234.567,89", "€"]);
  });

  it("should return GBP", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "GBP" });
    expect(result).to.eql(["£0.56", "0.56", "£"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "GBP" });
    expect(result).to.eql(["£1,234.56", "1,234.56", "£"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "GBP" });
    expect(result).to.eql(["£1,234,567.89", "1,234,567.89", "£"]);
  });

  it("should return GTQ", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "GTQ" });
    expect(result).to.eql(['Q0.56', '0.56', 'Q' ]);
    var result = index.formatCurrency({ amount: 1234.56, code: "GTQ" });
    expect(result).to.eql(['Q1,234.56', '1,234.56', 'Q' ]);
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
    expect(result).to.eql(['L 0.56', '0.56', 'L' ]);
    var result = index.formatCurrency({ amount: 1234.56, code: "HNL" });
    expect(result).to.eql(['L 1,234.56', '1,234.56', 'L' ]);
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
    expect(result).to.eql(['J$ 0.56', '0.56', 'J$' ]);
    var result = index.formatCurrency({ amount: 1234.56, code: "JMD" });
    expect(result).to.eql(['J$ 1,234.56', '1,234.56', 'J$' ]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "JMD" });
    expect(result).to.eql(["J$ 1,234,567.89", "1,234,567.89", "J$"]);
  });

  it("should return JPY", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "JPY" });
    expect(result).to.eql(["¥ 0.56", "0.56", "¥"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "JPY" });
    expect(result).to.eql(["¥ 1,234.56", "1,234.56", "¥"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "JPY" });
    expect(result).to.eql(["¥ 1,234,567.89", "1,234,567.89", "¥"]);
  });

  it("should return KRW", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "KRW" });
    expect(result).to.eql(["₩ 0.56", "0.56", "₩"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "KRW" });
    expect(result).to.eql(["₩ 1,234.56", "1,234.56", "₩"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "KRW" });
    expect(result).to.eql(["₩ 1,234,567.89", "1,234,567.89", "₩"]);
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
    expect(result).to.eql(['C$ 0.56', '0.56', 'C$' ]);
    var result = index.formatCurrency({ amount: 1234.56, code: "NIO" });
    expect(result).to.eql(['C$ 1,234.56', '1,234.56', 'C$' ]);
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

  it("should return NZD", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "NZD" });
    expect(result).to.eql(["$ 0.56", "0.56", "$"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "NZD" });
    expect(result).to.eql(["$ 1,234.56", "1,234.56", "$"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "NZD" });
    expect(result).to.eql(["$ 1,234,567.89", "1,234,567.89", "$"]);
  });

  it("should return PAB", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "PAB" });
    expect(result).to.eql(['B/. 0.56', '0.56', 'B/.' ]);
    var result = index.formatCurrency({ amount: 1234.56, code: "PAB" });
    expect(result).to.eql(['B/. 1,234.56', '1,234.56', 'B/.' ]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "PAB" });
    expect(result).to.eql(["B/. 1,234,567.89", "1,234,567.89", "B/."]);
  });

  it("should return PEN", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "PEN" });
    expect(result).to.eql(['S/. 0.56', '0.56', 'S/.' ]);
    var result = index.formatCurrency({ amount: 1234.56, code: "PEN" });
    expect(result).to.eql(['S/. 1,234.56', '1,234.56', 'S/.' ]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "PEN" });
    expect(result).to.eql(["S/. 1,234,567.89", "1,234,567.89", "S/."]);
  });

  it("should return PHP", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "PHP" });
    expect(result).to.eql(["₱ 0.56", "0.56", "₱"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "PHP" });
    expect(result).to.eql(["₱ 1,234.56", "1,234.56", "₱"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "PHP" });
    expect(result).to.eql(["₱ 1,234,567.89", "1,234,567.89", "₱"]);
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
    expect(result).to.eql(['₲0.56', '0.56', '₲' ]);
    var result = index.formatCurrency({ amount: 1234.56, code: "PYG" });
    expect(result).to.eql(['₲1,234.56', '1,234.56', '₲' ]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "PYG" });
    expect(result).to.eql(["₲1,234,567.89", "1,234,567.89", "₲"]);
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

  it("should return SAR", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "SAR" });
    expect(result).to.eql(["0.56 ﷼", "0.56", "﷼"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "SAR" });
    expect(result).to.eql(["1,234.56 ﷼", "1,234.56", "﷼"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "SAR" });
    expect(result).to.eql(["1,234,567.89 ﷼", "1,234,567.89", "﷼"]);
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

  it("should return SVC", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "SVC" });
    expect(result).to.eql(['₡0.56', '0.56', '₡' ]);
    var result = index.formatCurrency({ amount: 1234.56, code: "SVC" });
    expect(result).to.eql(['₡1,234.56', '1,234.56', '₡' ]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "SVC" });
    expect(result).to.eql(["₡1,234,567.89", "1,234,567.89", "₡"]);
  });

  it("should return THB", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "THB" });
    expect(result).to.eql(["0.56 ฿", "0.56", "฿"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "THB" });
    expect(result).to.eql(["1,234.56 ฿", "1,234.56", "฿"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "THB" });
    expect(result).to.eql(["1,234,567.89 ฿", "1,234,567.89", "฿"]);
  });

  it("should return TRY", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "TRY" });
    expect(result).to.eql(["0.56 ₺", "0.56", "₺"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "TRY" });
    expect(result).to.eql(["1,234.56 ₺", "1,234.56", "₺"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "TRY" });
    expect(result).to.eql(["1,234,567.89 ₺", "1,234,567.89", "₺"]);
  });

  it("should return TWD", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "TWD" });
    expect(result).to.eql(["元 0.56", "0.56", "元"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "TWD" });
    expect(result).to.eql(["元 1,234.56", "1,234.56", "元"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "TWD" });
    expect(result).to.eql(["元 1,234,567.89", "1,234,567.89", "元"]);
  });

  it("should return USD", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "USD" });
    expect(result).to.eql(["$0.56", "0.56", "$"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "USD" });
    expect(result).to.eql(["$1,234.56", "1,234.56", "$"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "USD" });
    expect(result).to.eql(["$1,234,567.89", "1,234,567.89", "$"]);
  });

  it("should return VND", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "VND" });
    expect(result).to.eql(["0,56 ₫", "0,56", "₫"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "VND" });
    expect(result).to.eql(["1.234,56 ₫", "1.234,56", "₫"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "VND" });
    expect(result).to.eql(["1.234.567,89 ₫", "1.234.567,89", "₫"]);
  });

  it("should return UYU", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "UYU" });
    expect(result).to.eql(['$U0,56', '0,56', '$U' ]);
    var result = index.formatCurrency({ amount: 1234.56, code: "UYU" });
    expect(result).to.eql(['$U1.234,56', '1.234,56', '$U' ]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "UYU" });
    expect(result).to.eql(["$U1.234.567,89", "1.234.567,89", "$U"]);
  });

  it("should return ZAR", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "ZAR" });
    expect(result).to.eql(["R 0.56", "0.56", "R"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "ZAR" });
    expect(result).to.eql(["R 1,234.56", "1,234.56", "R"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "ZAR" });
    expect(result).to.eql(["R 1,234,567.89", "1,234,567.89", "R"]);
  });

  it("should return GEL", () => {
    var result = index.formatCurrency({ amount: 0.56, code: "GEL" });
    expect(result).to.eql(["₾0,56", "0,56", "₾"]);
    var result = index.formatCurrency({ amount: 1234.56, code: "GEL" });
    expect(result).to.eql(["₾1.234,56", "1.234,56", "₾"]);
    var result = index.formatCurrency({ amount: 1234567.89, code: "GEL" });
    expect(result).to.eql(["₾1.234.567,89", "1.234.567,89", "₾"]);
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
