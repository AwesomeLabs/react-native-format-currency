type FormatCurrencyFunction = ({
  amount,
  code,
}: {
  amount: number;
  code: string;
}) => [string, string, string];

export const formatCurrency: FormatCurrencyFunction = ({ amount, code }) => {
  const commaFormatted = String(amount).replace(
    /(\d)(?=(\d{3})+(?!\d))/g,
    "$1,"
  );
  const periodFormatted = String(amount)
    .replace(".", ",")
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

  const switchOptions: Record<string, [string, string,string]> = {
    // united arab emirates dirham (ex: AED 1,234.56)
    AED: [`AED ${commaFormatted}`, `${commaFormatted}`, "AED"],

    // argentine peso (ex: $ 1.234,56)
    ARS: [`$ ${periodFormatted}`, `${periodFormatted}`, "$"],

    // australian dollar (ex: $ 1,234.56)
    AUD: [`$ ${commaFormatted}`, `${commaFormatted}`, "$"],

    // bosnia and herzegovina convertible mark (ex: KM 1.234,56)
    BAM: [`KM ${commaFormatted}`, `${commaFormatted}`, "KM"],

    // barbadian Dollar (ex: $1.234,56)
    BBD: [`$${commaFormatted}`, `${commaFormatted}`, "$"],

    // bolivian Boliviano (ex: $b 1.234,56)
    BOB: [`$b ${commaFormatted}`, `${commaFormatted}`, "$b"],

    // bulgarian lev (ex: лв1,234.56)
    BGN: [`лв${commaFormatted}`, `${commaFormatted}`, "лв"],

    // brazilian real (ex: R$ 1.234,56)
    BRL: [`R$ ${periodFormatted}`, `${periodFormatted}`, "R$"],

    // bahamian Dollar (ex: $1,234,56)
    BSD: [`$${commaFormatted}`, `${commaFormatted}`, "$"],

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

    // costa rican colón (ex: ₡1.234,56)
    CRC: [`₡${periodFormatted}`, `${periodFormatted}`, "₡"],

    // czech koruna (ex: 1.234,56 Kč)
    CZK: [`${periodFormatted} Kč`, `${periodFormatted}`, "Kč"],

    // danish krone (ex: kr. 1.234,56)
    DKK: [`kr. ${periodFormatted}`, `${periodFormatted}`, "kr."],

    // dominican Peso (ex: RD$ 1,234.56)
    DOP: [`RD$ ${commaFormatted}`, `${commaFormatted}`, "RD$"],

    // european union (ex: €1.234,56)
    EUR: [`€${periodFormatted}`, `${periodFormatted}`, "€"],

    // uk/great britain pound sterling (ex: £1,234.56)
    GBP: [`£${commaFormatted}`, `${commaFormatted}`, "£"],

    // georgian lari (ex: 1,234.56 ₾)
    GEL: [`${commaFormatted} ₾`, `${commaFormatted}`, "₾"],

    // guatemalan quetzal (ex: Q1,234.56)
    GTQ: [`Q${commaFormatted}`, `${commaFormatted}`, "Q"],

    // hong kong dollar (ex: HK$ 1,234.56)
    HKD: [`HK$ ${commaFormatted}`, `${commaFormatted}`, "HK$"],

    // honduran lempira (ex: L 1,234.56)
    HNL: [`L ${commaFormatted}`, `${commaFormatted}`, "L"],

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

    // jamaican dollar (ex: J$ 1,234.56)
    JMD: [`J$ ${commaFormatted}`, `${commaFormatted}`, "J$"],

    // yen (ex: ¥ 1,234.56)
    JPY: [`¥ ${commaFormatted}`, `${commaFormatted}`, "¥"],

    // won (ex: ₩ 1,234.56)
    KRW: [`₩ ${commaFormatted}`, `${commaFormatted}`, "₩"],

    // moroccan dirham (ex: 1,234.56 .د.م.)
    MAD: [`${commaFormatted} .د.م.`, `${commaFormatted}`, ".د.م."],

    // moldovan leu (ex: 1.234,56 L)
    MDL: [`${commaFormatted} L`, `${commaFormatted}`, "L"],

    // mexican peso (ex: $ 1,234.56)
    MXN: [`$ ${commaFormatted}`, `${commaFormatted}`, "$"],

    // malaysian ringgit (ex: RM 1,234.56)
    MYR: [`RM ${commaFormatted}`, `${commaFormatted}`, "RM"],

    // nigerian naira (ex: ₦1,234.56)
    NGN: [`₦${commaFormatted}`, `${commaFormatted}`, "₦"],

    // nicaraguan Córdoba (ex: C$ 1,234.56)
    NIO: [`C$ ${commaFormatted}`, `${commaFormatted}`, "C$"],

    // norwegian krone (ex: kr 1,234.56)
    NOK: [`kr ${commaFormatted}`, `${commaFormatted}`, "kr"],

    // new zealand dollar (ex: $ 1,234.56)
    NZD: [`$ ${commaFormatted}`, `${commaFormatted}`, "$"],

    // panamanian balboa (ex: B/. 1,234.56)
    PAB: [`B/. ${commaFormatted}`, `${commaFormatted}`, "B/."],

    // peruvian Nuevo Sol (ex: S/. 1,234.56)
    PEN: [`S/. ${commaFormatted}`, `${commaFormatted}`, "S/."],

    // philippine peso (ex: ₱ 1,234.56)
    PHP: [`₱ ${commaFormatted}`, `${commaFormatted}`, "₱"],

    // polish zloty (ex: 1.234,56 zł)
    PLN: [`${periodFormatted} zł`, `${periodFormatted}`, "zł"],

    // paraguayan Guaraní (ex: ₲1,234.56)
    PYG: [`₲${commaFormatted}`, `${commaFormatted}`, "₲"],

    // romanian new leu (ex: 1,234.56L)
    RON: [`${commaFormatted}L`, `${commaFormatted}`, "L"],

    // serbian dinar (ex: 1,234.56 RSD)
    RSD: [`${commaFormatted}RSD`, `${commaFormatted}`, "RSD"],

    // russian ruble (ex: 1.234,56 p.)
    RUB: [`${periodFormatted} p.`, `${periodFormatted}`, "p."],

    // saudi riyal (ex: 1,234.56 ﷼)
    SAR: [`${commaFormatted} ﷼`, `${commaFormatted}`, "﷼"],

    // swedish krona (ex: 1.234,56 kr)
    SEK: [`${periodFormatted} kr`, `${periodFormatted}`, "kr"],

    // singapore dollar (ex: $1,234.56)
    SGD: [`$${commaFormatted}`, `${commaFormatted}`, "$"],

    // salvadoran Colón(ex: ₡1,234.56)
    SVC: [`₡${commaFormatted}`, `${commaFormatted}`, "₡"],

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

    // uruguayan Peso (ex: $U1.234.56)
    UYU: [`$U${periodFormatted}`, `${periodFormatted}`, "$U"],

    // south african rand (ex: R 1,234.56)
    ZAR: [`R ${commaFormatted}`, `${commaFormatted}`, "R"],

    // default
    DEFAULT: [amount.toString(), amount.toString(), ""],
  };

  return switchOptions[code] || switchOptions.DEFAULT;
};

type CurrencyCode = {
  code: string;
  name: string;
};
export const getSupportedCurrencies = () => {
  const currencyCodes: CurrencyCode[] = [
    { code: "AED", name: "United Arab Emirates Dirham" },
    // { code: "AFN", name: "Afghanistan Afghani"},
    // { code: "ALL", name: "Albania Lek"},
    // { code: "AMD", name: "Armenia Dram"},
    // { code: "ANG", name: "Netherlands Antilles Guilder"},
    // { code: "AOA", name: "Angola Kwanza"},
    { code: "ARS", name: "Argentina Peso" },
    { code: "AUD", name: "Australia Dollar" },
    // { code: "AWG", name: "Aruba Guilder"},
    // { code: "AZN", name: "Azerbaijan Manat"},
    { code: "BAM", name: "Bosnia and Herzegovina Convertible Mark" },
    { code: "BBD", name: "Barbados Dollar" },
    // { code: "BDT", name: "Bangladesh Taka"},
    { code: "BGN", name: "Bulgaria Lev" },
    // { code: "BHD", name: "Bahrain Dinar" },
    // { code: "BIF", name: "Burundi Franc" },
    // { code: "BMD", name: "Bermuda Dollar" },
    // { code: "BND", name: "Brunei Darussalam Dollar" },
    { code: "BOB", name: "Bolivia Bolíviano" },
    { code: "BRL", name: "Brazil Real" },
    { code: "BSD", name: "Bahamas Dollar" },
    // { code: "BTN", name: "Bhutan Ngultrum" },
    // { code: "BWP", name: "Botswana Pula" },
    // { code: "BYN", name: "Belarus Ruble" },
    // { code: "BZD", name: "Belize Dollar" },
    { code: "CAD", name: "Canada Dollar" },
    // { code: "CDF", name: "Congo/Kinshasa Franc" },
    { code: "CHF", name: "Switzerland Franc" },
    { code: "CLP", name: "Chile Peso" },
    { code: "CNY", name: "China Yuan Renminbi" },
    { code: "COP", name: "Colombia Peso" },
    { code: "CRC", name: "Costa Rica Colón" },
    // { code: "CUC", name: "Cuba Convertible Peso" },
    // { code: "CUP", name: "Cuba Peso" },
    // { code: "CVE", name: "Cape Verde Escudo" },
    { code: "CZK", name: "Czech Republic Koruna" },
    // { code: "DJF", name: "Djibouti Franc" },
    { code: "DKK", name: "Denmark Krone" },
    { code: "DOP", name: "Dominican Republic Peso" },
    // { code: "DZD", name: "Algeria Dinar" },
    // { code: "EGP", name: "Egypt Pound" },
    // { code: "ERN", name: "Eritrea Nakfa" },
    // { code: "ETB", name: "Ethiopia Birr" },
    { code: "EUR", name: "Euro Member Countries" },
    // { code: "FJD", name: "Fiji Dollar" },
    // { code: "FKP", name: "Falkland Islands (Malvinas) Pound" },
    { code: "GBP", name: "United Kingdom Pound" },
    { code: "GEL", name: "Georgia Lari" },
    // { code: "GGP", name: "Guernsey Pound" },
    // { code: "GHS", name: "Ghana Cedi" },
    // { code: "GIP", name: "Gibraltar Pound" },
    // { code: "GMD", name: "Gambia Dalasi" },
    // { code: "GNF", name: "Guinea Franc" },
    { code: "GTQ", name: "Guatemala Quetzal" },
    { code: "HKD", name: "Hong Kong Dollar" },
    { code: "HNL", name: "Honduras Lempira" },
    { code: "HRK", name: "Croatia Kuna" },
    // { code: "HTG", name: "Haiti Gourde" },
    { code: "HUF", name: "Hungary Forint" },
    { code: "IDR", name: "Indonesia Rupiah" },
    { code: "ILS", name: "Israel Shekel" },
    // { code: "IMP", name: "Isle of Man Pound" },
    { code: "INR", name: "India Rupee" },
    // { code: "IQD", name: "Iraq Dinar" },
    // { code: "IRR", name: "Iran Rial" },
    { code: "ISK", name: "Iceland Krona" },
    // { code: "JEP", name: "Jersey Pound" },
    { code: "JMD", name: "Jamaica Dollar" },
    // { code: "JOD", name: "Jordan Dinar" },
    { code: "JPY", name: "Japan Yen" },
    // { code: "KES", name: "Kenya Shilling" },
    // { code: "KGS", name: "Kyrgyzstan Som" },
    // { code: "KHR", name: "Cambodia Riel" },
    // { code: "KMF", name: "Comorian Franc" },
    // { code: "KPW", name: "Korea (North) Won" },
    { code: "KRW", name: "Korea (South) Won" },
    // { code: "KWD", name: "Kuwait Dinar" },
    // { code: "KYD", name: "Cayman Islands Dollar" },
    // { code: "KZT", name: "Kazakhstan Tenge" },
    // { code: "LAK", name: "Laos Kip" },
    // { code: "LPB", name: "Lebanon Pound" },
    // { code: "LKR", name: "Sri Lanka Rupee" },
    // { code: "LRD", name: "Liberia Dollar" },
    // { code: "LSL", name: "Lesotho Loti" },
    // { code: "LYD", name: "Libya Dinar" },
    { code: "MAD", name: "Morocco Dirham" },
    { code: "MDL", name: "Moldova Leu" },
    // { code: "MGA", name: "Madagascar Ariary" },
    // { code: "MKD", name: "Macedonia Denar" },
    // { code: "MMK", name: "Myanmar (Burma) Kyat" },
    // { code: "MNT", name: "Mongolia Tughrik" },
    // { code: "MOP", name: "Macau Pataca" },
    // { code: "MRU", name: "Mauritania Ouguiya" },
    // { code: "MUR", name: "Mauritius Rupee" },
    // { code: "MVR", name: "Maldives (Maldive Islands) Rufiyaa" },
    // { code: "MWK", name: "Malawi Kwacha" },
    { code: "MXN", name: "Mexico Peso" },
    { code: "MYR", name: "Malaysia Ringgit" },
    // { code: "MZN", name: "Mozambique Metical" },
    // { code: "NAD", name: "Namibia Dollar" },
    { code: "NGN", name: "Nigeria Naira" },
    { code: "NIO", name: "Nicaragua Córdoba" },
    { code: "NOK", name: "Norway Krone" },
    // { code: "NPR", name: "Nepal Rupee" },
    { code: "NZD", name: "New Zealand Dollar" },
    // { code: "OMR", name: "Oman Rial" },
    { code: "PAB", name: "Panama Balboa" },
    { code: "PEN", name: "Peruvian Nuevo Sol" },
    // { code: "PGK", name: "Papua New Guinea Kina" },
    { code: "PHP", name: "Philippines Peso" },
    // { code: "PKR", name: "Pakistan Rupee" },
    { code: "PLN", name: "Poland Zloty" },
    { code: "PYG", name: "Paraguay Guarani" },
    // { code: "QAR", name: "Qatar Riyal" },
    { code: "RON", name: "Romania Leu" },
    { code: "RSD", name: "Serbia Dinar" },
    { code: "RUB", name: "Russia Ruble" },
    // { code: "RWF", name: "Rwanda Franc" },
    { code: "SAR", name: "Saudi Arabia Riyal" },
    // { code: "SBD", name: "Solomon Islands Dollar" },
    // { code: "SCR", name: "Seychelles Rupee" },
    // { code: "SDG", name: "Sudan Pound" },
    { code: "SEK", name: "Sweden Krona" },
    { code: "SGD", name: "Singapore Dollar" },
    // { code: "SHP", name: "Saint Helena Pound" },
    // { code: "SLL", name: "Sierra Leone Leone" },
    // { code: "SOS", name: "Somalia Shilling" },
    // { code: "SPL", name: "Seborga Luigino" },
    // { code: "SRD", name: "Suriname Dollar" },
    // { code: "STN", name: "São Tomé and Príncipe Dobra" },
    { code: "SVC", name: "El Salvador Colon" },
    // { code: "SYP", name: "Syria Pound" },
    // { code: "SZL", name: "eSwatini Lilangeni" },
    { code: "THB", name: "Thailand Baht" },
    // { code: "TJS", name: "Tajikistan Somoni" },
    // { code: "TMT", name: "Turkmenistan Manat" },
    // { code: "TND", name: "Tunisia Dinar" },
    // { code: "TOP", name: "Tonga Pa'anga" },
    { code: "TRY", name: "Turkey Lira" },
    // { code: "TTD", name: "Trinidad and Tobago Dollar" },
    // { code: "TVD", name: "Tuvalu Dollar" },
    { code: "TWD", name: "Taiwan New Dollar" },
    // { code: "TZS", name: "Tanzania Shilling" },
    // { code: "UAH", name: "Ukraine Hryvnia" },
    // { code: "UGX", name: "Uganda Shilling" },
    { code: "USD", name: "United States Dollar" },
    { code: "UYU", name: "Uruguay Peso" },
    // { code: "UZS", name: "Uzbekistan Som" },
    // { code: "VEF", name: "Venezuela Bolívar" },
    { code: "VND", name: "Viet Nam Dong" },
    // { code: "VUV", name: "Vanuatu Vatu" },
    // { code: "WST", name: "Samoa Tala" },
    // { code: "XAF", name: "Communauté Financière Africaine (BEAC) CFA Franc BEAC" },
    // { code: "XCD", name: "East Caribbean Dollar" },
    // { code: "XDR", name: "International Monetary Fund (IMF) Special Drawing Rights" },
    // { code: "XOF", name: "Communauté Financière Africaine (BCEAO) Franc" },
    // { code: "XPF", name: "Comptoirs Français du Pacifique (CFP) Franc" },
    // { code: "YER", name: "Yemen Rial" },
    { code: "ZAR", name: "South Africa Rand" },
    // { code: "ZMW", name: "Zambia Kwacha" },
    // { code: "ZWD", name: "Zimbabwe Dollar" },
  ];

  return currencyCodes;
};
