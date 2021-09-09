type FormatCurrencyFunction = ({
  amount,
  code,
}: {
  amount: number;
  code: string;
}) => [string, number, string];

export const formatCurrency: FormatCurrencyFunction = ({ amount, code }) => {
  const fixedAmount = amount.toFixed(2);
  const commaFormatted = fixedAmount.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  const periodFormatted = fixedAmount
    .replace(".", ",")
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

  const switchOptions = {
    // argentine peso (ex: $ 1.234,56)
    ARS: [`$ ${periodFormatted}`, `${periodFormatted}`, "$"],

    // australian dollar (ex: $ 1,234.56)
    AUD: [`$ ${commaFormatted}`, `${commaFormatted}`, "$"],

    // bulgarian lev (ex: лв1,234.56)
    BGN: [`лв${commaFormatted}`, `${commaFormatted}`, "лв"],

    // brazilian real (ex: R$ 1.234,56)
    BRL: [`R$ ${periodFormatted}`, `${periodFormatted}`, "R$"],

    // canadian dollar (ex: $ 1,234.56)
    CAD: [`$ ${commaFormatted}`, `${commaFormatted}`, "$"],

    // swiss franc (ex: fr. 1.234,56)
    CHF: [`fr. ${periodFormatted}`, `${periodFormatted}`, "fr."],

    // chilean peso (ex: $ 1,234.56)
    CLP: [`$ ${commaFormatted}`, `${commaFormatted}`, "$"],

    // yuan renminbi (ex: ¥ 1,234.56)
    CNY: [`¥ ${commaFormatted}`, `${commaFormatted}`, "¥"],

    // colombian peso (ex: $ 1,234.56)
    COP: [`$ ${commaFormatted}`, `${commaFormatted}`, "$"],

    // czech koruna (ex: 1.234,56 Kč)
    CZK: [`${periodFormatted} Kč`, `${periodFormatted}`, "Kč"],

    // danish krone (ex: kr. 1.234,56)
    DKK: [`kr. ${periodFormatted}`, `${periodFormatted}`, "kr."],

    // european union (ex: €1.234,56)
    EUR: [`€${periodFormatted}`, `${periodFormatted}`, "€"],

    // uk/great britain pound sterling (ex: £1,234.56)
    GBP: [`£${commaFormatted}`, `${commaFormatted}`, "£"],

    // hong kong dollar (ex: HK$ 1,234.56)
    HKD: [`HK$ ${commaFormatted}`, `${commaFormatted}`, "HK$"],

    // croatian kuna (ex: 1,234.56 kn)
    HRK: [`${commaFormatted} kn`, `${commaFormatted}`, "kn"],

    // hungarian forint (ex: 1.234,56 Ft)
    HUF: [`${periodFormatted} Ft`, `${periodFormatted}`, "Ft"],

    // indonesian rupiah (ex: Rp 1,234.56)
    IDR: [`Rp ${commaFormatted}`, `${commaFormatted}`, "Rp"],

    // new israeli shekel (ex: ₪ 1.234,56)
    ILS: [`₪ ${periodFormatted}`, `${periodFormatted}`, "₪"],

    // indian rupee (ex: ₹ 1,234.56)
    INR: [`₹ ${commaFormatted}`, `${commaFormatted}`, "₹"],

    // icelandic krona (ex: kr. 1.234,56)
    ISK: [`kr. ${periodFormatted}`, `${periodFormatted}`, "kr."],

    // yen (ex: ¥ 1,234.56)
    JPY: [`¥ ${commaFormatted}`, `${commaFormatted}`, "¥"],

    // won (ex: ₩ 1,234.56)
    KRW: [`₩ ${commaFormatted}`, `${commaFormatted}`, "₩"],

    // moroccan dirham (ex: 1,234.56 .د.م.)
    MAD: [`${commaFormatted} .د.م.`, `${commaFormatted}`, ".د.م."],

    // mexican peso (ex: $ 1,234.56)
    MXN: [`$ ${commaFormatted}`, `${commaFormatted}`, "$"],

    // malaysian ringgit (ex: RM 1,234.56)
    MYR: [`RM ${commaFormatted}`, `${commaFormatted}`, "RM"],

    // norwegian krone (ex: kr 1,234.56)
    NOK: [`kr ${commaFormatted}`, `${commaFormatted}`, "kr"],

    // new zealand dollar (ex: $ 1,234.56)
    NZD: [`$ ${commaFormatted}`, `${commaFormatted}`, "$"],

    // philippine peso (ex: ₱ 1,234.56)
    PHP: [`₱ ${commaFormatted}`, `${commaFormatted}`, "₱"],

    // polish zloty (ex: 1.234,56 zł)
    PLN: [`${periodFormatted} zł`, `${periodFormatted}`, "zł"],

    // romanian new leu (ex: 1,234.56L)
    RON: [`${commaFormatted}L`, `${commaFormatted}`, "L"],

    // russian ruble (ex: 1.234,56 p.)
    RUB: [`${periodFormatted} p.`, `${periodFormatted}`, "p."],

    // saudi riyal (ex: 1,234.56 ﷼)
    SAR: [`${commaFormatted} ﷼`, `${commaFormatted}`, "﷼"],

    // swedish krona (ex: 1.234,56 kr)
    SEK: [`${periodFormatted} kr`, `${periodFormatted}`, "kr"],

    // singapore dollar (ex: $1,234.56)
    SGD: [`$${commaFormatted}`, `${commaFormatted}`, "$"],

    // thai baht (ex: 1,234.56 ฿)
    THB: [`${commaFormatted} ฿`, `${commaFormatted}`, "฿"],

    // turkish lira (ex: 1,234.56 ₺)
    TRY: [`${commaFormatted} ₺`, `${commaFormatted}`, "₺"],

    // new taiwan dollar (ex: 元 1,234.56)
    TWD: [`元 ${commaFormatted}`, `${commaFormatted}`, "元"],

    // us dollar (ex: $1,234.56)
    USD: [`$${commaFormatted}`, `${commaFormatted}`, "$"],

    // vietnamese dong (ex: 1.234,56 ₫)
    VND: [`${periodFormatted} ₫`, `${periodFormatted}`, "₫"],

    // south african rand (ex: R 1,234.56)
    ZAR: [`R ${commaFormatted}`, `${commaFormatted}`, "R"],

    // default
    DEFAULT: [amount.toString(), amount.toString(), ""],
  };

  // TODO: fix typescript error!
  // @ts-ignore
  return switchOptions[code] || switchOptions.DEFAULT;
};

type CurrencyCode = {
  code: string;
  name: string;
};
export const getSupportedCurrencies = () => {
  const currencyCodes: CurrencyCode[] = [
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
    { code: "HRK", name: "Croatia Kuna" },
    { code: "HUF", name: "Hungary Forint" },
    { code: "IDR", name: "Indonesia Rupiah" },
    { code: "ILS", name: "Israel Shekel" },
    { code: "INR", name: "India Rupee" },
    { code: "ISK", name: "Iceland Krona" },
    { code: "JPY", name: "Japan Yen" },
    { code: "KRW", name: "Korea (South) Won" },
    { code: "MAD", name: "Morocco Dirham" },
    { code: "MXN", name: "Mexico Peso" },
    { code: "MYR", name: "Malaysia Ringgit" },
    { code: "NOK", name: "Norway Krone" },
    { code: "NZD", name: "New Zealand Dollar" },
    { code: "PHP", name: "Philippines Peso" },
    { code: "PLN", name: "Poland Zloty" },
    { code: "RON", name: "Romania Leu" },
    { code: "RUB", name: "Russia Ruble" },
    { code: "SAR", name: "Saudi Arabia Riyal" },
    { code: "SEK", name: "Sweden Krona" },
    { code: "SGD", name: "Singapore Dollar" },
    { code: "THB", name: "Thailand Baht" },
    { code: "TRY", name: "Turkey Lira" },
    { code: "TWD", name: "Taiwan New Dollar" },
    { code: "USD", name: "United States Dollar" },
    { code: "VND", name: "Viet Nam Dong" },
    { code: "ZAR", name: "South Africa Rand" },
    { code: "DEFAULT", name: "Default" },
  ];

  return currencyCodes;
};
