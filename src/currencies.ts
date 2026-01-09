import type { CurrencyConfig } from "./types";

// Helper to keep values type-checked while preserving the literal currency codes as keys.
const defineCurrencies = <T extends Record<string, CurrencyConfig>>(
  currencies: T,
): T => currencies;

export const CURRENCIES = defineCurrencies({
  // united arab emirates dirham (ex: AED 1,234.56)
  AED: {
    name: "United Arab Emirates Dirham",
    symbol: "AED",
    format: "comma",
    position: "before",
    space: true,
  },
  // afghanistan afghani (ex: 1,234.56 ؋)
  AFN: {
    name: "Afghanistan Afghani",
    symbol: "؋",
    format: "comma",
    position: "after",
    space: true,
  },
  // albania lek (ex: 1,234.56 L)
  ALL: {
    name: "Albania Lek",
    symbol: "L",
    format: "comma",
    position: "after",
    space: true,
  },
  // armenia dram (ex: 1,234.56 ֏)
  AMD: {
    name: "Armenia Dram",
    symbol: "֏",
    format: "comma",
    position: "after",
    space: true,
  },
  // netherlands antilles guilder (ex: ƒ1,234.56)
  ANG: {
    name: "Netherlands Antilles Guilder",
    symbol: "ƒ",
    format: "comma",
    position: "before",
    space: false,
  },
  // angola kwanza (ex: Kz 1,234.56)
  AOA: {
    name: "Angola Kwanza",
    symbol: "Kz",
    format: "comma",
    position: "before",
    space: true,
  },
  // argentina peso (ex: $ 1.234,56)
  ARS: {
    name: "Argentina Peso",
    symbol: "$",
    format: "period",
    position: "before",
    space: true,
  },
  // australia dollar (ex: $ 1,234.56)
  AUD: {
    name: "Australia Dollar",
    symbol: "$",
    format: "comma",
    position: "before",
    space: true,
  },
  // aruba guilder (ex: ƒ1,234.56)
  AWG: {
    name: "Aruba Guilder",
    symbol: "ƒ",
    format: "comma",
    position: "before",
    space: false,
  },
  // azerbaijan manat (ex: 1,234.56 ₼)
  AZN: {
    name: "Azerbaijan Manat",
    symbol: "₼",
    format: "comma",
    position: "after",
    space: true,
  },
  // bosnia and herzegovina convertible mark (ex: KM 1,234.56)
  BAM: {
    name: "Bosnia and Herzegovina Convertible Mark",
    symbol: "KM",
    format: "comma",
    position: "before",
    space: true,
  },
  // barbados dollar (ex: $1,234.56)
  BBD: {
    name: "Barbados Dollar",
    symbol: "$",
    format: "comma",
    position: "before",
    space: false,
  },
  // bangladesh taka (ex: ৳ 1,234.56)
  BDT: {
    name: "Bangladesh Taka",
    symbol: "৳",
    format: "comma",
    position: "before",
    space: true,
  },
  // bulgaria lev (ex: лв1,234.56)
  BGN: {
    name: "Bulgaria Lev",
    symbol: "лв",
    format: "comma",
    position: "before",
    space: false,
  },
  // bahrain dinar (ex: .د.ب 1,234.567) - 3 decimal places per ISO 4217
  BHD: {
    name: "Bahrain Dinar",
    symbol: ".د.ب",
    format: "comma",
    position: "before",
    space: true,
    decimals: 3,
  },
  // burundi franc (ex: FBu 1,234.56)
  BIF: {
    name: "Burundi Franc",
    symbol: "FBu",
    format: "comma",
    position: "before",
    space: true,
  },
  // bermuda dollar (ex: $1,234.56)
  BMD: {
    name: "Bermuda Dollar",
    symbol: "$",
    format: "comma",
    position: "before",
    space: false,
  },
  // brunei darussalam dollar (ex: $ 1,234.56)
  BND: {
    name: "Brunei Darussalam Dollar",
    symbol: "$",
    format: "comma",
    position: "before",
    space: true,
  },
  // bolivia boliviano (ex: $b 1,234.56)
  BOB: {
    name: "Bolivia Boliviano",
    symbol: "$b",
    format: "comma",
    position: "before",
    space: true,
  },
  // brazil real (ex: R$ 1.234,56)
  BRL: {
    name: "Brazil Real",
    symbol: "R$",
    format: "period",
    position: "before",
    space: true,
  },
  // bahamas dollar (ex: $1,234.56)
  BSD: {
    name: "Bahamas Dollar",
    symbol: "$",
    format: "comma",
    position: "before",
    space: false,
  },
  // bhutan ngultrum (ex: Nu. 1,234.56)
  BTN: {
    name: "Bhutan Ngultrum",
    symbol: "Nu.",
    format: "comma",
    position: "before",
    space: true,
  },
  // botswana pula (ex: P 1,234.56)
  BWP: {
    name: "Botswana Pula",
    symbol: "P",
    format: "comma",
    position: "before",
    space: true,
  },
  // belarus ruble (ex: 1.234,56 Br)
  BYN: {
    name: "Belarus Ruble",
    symbol: "Br",
    format: "period",
    position: "after",
    space: true,
  },
  // belize dollar (ex: BZ$ 1,234.56)
  BZD: {
    name: "Belize Dollar",
    symbol: "BZ$",
    format: "comma",
    position: "before",
    space: true,
  },
  // canada dollar (ex: $ 1,234.56)
  CAD: {
    name: "Canada Dollar",
    symbol: "$",
    format: "comma",
    position: "before",
    space: true,
  },
  // congo/kinshasa franc (ex: FC 1,234.56)
  CDF: {
    name: "Congo/Kinshasa Franc",
    symbol: "FC",
    format: "comma",
    position: "before",
    space: true,
  },
  // switzerland franc (ex: fr. 1.234,56)
  CHF: {
    name: "Switzerland Franc",
    symbol: "fr.",
    format: "period",
    position: "before",
    space: true,
  },
  // chile peso (ex: $ 1,234.56)
  CLP: {
    name: "Chile Peso",
    symbol: "$",
    format: "comma",
    position: "before",
    space: true,
  },
  // china yuan renminbi (ex: ¥ 1,234.56)
  CNY: {
    name: "China Yuan Renminbi",
    symbol: "¥",
    format: "comma",
    position: "before",
    space: true,
  },
  // colombia peso (ex: $ 1,234.56)
  COP: {
    name: "Colombia Peso",
    symbol: "$",
    format: "comma",
    position: "before",
    space: true,
  },
  // costa rica colon (ex: ₡1.234,56)
  CRC: {
    name: "Costa Rica Colon",
    symbol: "₡",
    format: "period",
    position: "before",
    space: false,
  },
  // cuba convertible peso (ex: CUC$ 1,234.56)
  CUC: {
    name: "Cuba Convertible Peso",
    symbol: "CUC$",
    format: "comma",
    position: "before",
    space: true,
  },
  // cuba peso (ex: ₱ 1,234.56)
  CUP: {
    name: "Cuba Peso",
    symbol: "₱",
    format: "comma",
    position: "before",
    space: true,
  },
  // cape verde escudo (ex: $ 1,234.56)
  CVE: {
    name: "Cape Verde Escudo",
    symbol: "$",
    format: "comma",
    position: "before",
    space: true,
  },
  // czech republic koruna (ex: 1.234,56 Kč)
  CZK: {
    name: "Czech Republic Koruna",
    symbol: "Kč",
    format: "period",
    position: "after",
    space: true,
  },
  // djibouti franc (ex: Fdj 1,234.56)
  DJF: {
    name: "Djibouti Franc",
    symbol: "Fdj",
    format: "comma",
    position: "before",
    space: true,
  },
  // denmark krone (ex: kr. 1.234,56)
  DKK: {
    name: "Denmark Krone",
    symbol: "kr.",
    format: "period",
    position: "before",
    space: true,
  },
  // dominican republic peso (ex: RD$ 1,234.56)
  DOP: {
    name: "Dominican Republic Peso",
    symbol: "RD$",
    format: "comma",
    position: "before",
    space: true,
  },
  // algeria dinar (ex: 1.234,56 د.ج)
  DZD: {
    name: "Algeria Dinar",
    symbol: "د.ج",
    format: "period",
    position: "after",
    space: true,
  },
  // egypt pound (ex: £ 1,234.56)
  EGP: {
    name: "Egypt Pound",
    symbol: "£",
    format: "comma",
    position: "before",
    space: true,
  },
  // eritrea nakfa (ex: Nfk 1,234.56)
  ERN: {
    name: "Eritrea Nakfa",
    symbol: "Nfk",
    format: "comma",
    position: "before",
    space: true,
  },
  // ethiopia birr (ex: Br 1,234.56)
  ETB: {
    name: "Ethiopia Birr",
    symbol: "Br",
    format: "comma",
    position: "before",
    space: true,
  },
  // euro member countries (ex: €1.234,56)
  EUR: {
    name: "Euro Member Countries",
    symbol: "€",
    format: "period",
    position: "before",
    space: false,
  },
  // fiji dollar (ex: FJ$ 1,234.56)
  FJD: {
    name: "Fiji Dollar",
    symbol: "FJ$",
    format: "comma",
    position: "before",
    space: true,
  },
  // falkland islands pound (ex: £1,234.56)
  FKP: {
    name: "Falkland Islands Pound",
    symbol: "£",
    format: "comma",
    position: "before",
    space: false,
  },
  // united kingdom pound (ex: £1,234.56)
  GBP: {
    name: "United Kingdom Pound",
    symbol: "£",
    format: "comma",
    position: "before",
    space: false,
  },
  // georgia lari (ex: 1,234.56 ₾)
  GEL: {
    name: "Georgia Lari",
    symbol: "₾",
    format: "comma",
    position: "after",
    space: true,
  },
  // ghana cedi (ex: ₵ 1,234.56)
  GHS: {
    name: "Ghana Cedi",
    symbol: "₵",
    format: "comma",
    position: "before",
    space: true,
  },
  // gibraltar pound (ex: £1,234.56)
  GIP: {
    name: "Gibraltar Pound",
    symbol: "£",
    format: "comma",
    position: "before",
    space: false,
  },
  // gambia dalasi (ex: D 1,234.56)
  GMD: {
    name: "Gambia Dalasi",
    symbol: "D",
    format: "comma",
    position: "before",
    space: true,
  },
  // guinea franc (ex: FG 1,234.56)
  GNF: {
    name: "Guinea Franc",
    symbol: "FG",
    format: "comma",
    position: "before",
    space: true,
  },
  // guatemala quetzal (ex: Q1,234.56)
  GTQ: {
    name: "Guatemala Quetzal",
    symbol: "Q",
    format: "comma",
    position: "before",
    space: false,
  },
  // hong kong dollar (ex: HK$ 1,234.56)
  HKD: {
    name: "Hong Kong Dollar",
    symbol: "HK$",
    format: "comma",
    position: "before",
    space: true,
  },
  // honduras lempira (ex: L 1,234.56)
  HNL: {
    name: "Honduras Lempira",
    symbol: "L",
    format: "comma",
    position: "before",
    space: true,
  },
  // croatia kuna (ex: 1,234.56 kn)
  // HRK was replaced by EUR on January 1, 2023 but is still supported for legacy reasons
  HRK: {
    name: "Croatia Kuna",
    symbol: "kn",
    format: "comma",
    position: "after",
    space: true,
  },
  // haiti gourde (ex: G 1,234.56)
  HTG: {
    name: "Haiti Gourde",
    symbol: "G",
    format: "comma",
    position: "before",
    space: true,
  },
  // hungary forint (ex: 1.234,56 Ft)
  HUF: {
    name: "Hungary Forint",
    symbol: "Ft",
    format: "period",
    position: "after",
    space: true,
  },
  // indonesia rupiah (ex: Rp 1,234.56)
  IDR: {
    name: "Indonesia Rupiah",
    symbol: "Rp",
    format: "comma",
    position: "before",
    space: true,
  },
  // israel shekel (ex: ₪ 1.234,56)
  ILS: {
    name: "Israel Shekel",
    symbol: "₪",
    format: "period",
    position: "before",
    space: true,
  },
  // india rupee (ex: ₹ 1,234.56)
  INR: {
    name: "India Rupee",
    symbol: "₹",
    format: "comma",
    position: "before",
    space: true,
  },
  // iraq dinar (ex: ع.د 1,234.56)
  IQD: {
    name: "Iraq Dinar",
    symbol: "ع.د",
    format: "comma",
    position: "before",
    space: true,
  },
  // iran rial (ex: 1,234.56 ﷼)
  IRR: {
    name: "Iran Rial",
    symbol: "﷼",
    format: "comma",
    position: "after",
    space: true,
  },
  // iceland krona (ex: kr. 1.234,56)
  ISK: {
    name: "Iceland Krona",
    symbol: "kr.",
    format: "period",
    position: "before",
    space: true,
  },
  // jamaica dollar (ex: J$ 1,234.56)
  JMD: {
    name: "Jamaica Dollar",
    symbol: "J$",
    format: "comma",
    position: "before",
    space: true,
  },
  // jordan dinar (ex: د.ا 1,234.56)
  JOD: {
    name: "Jordan Dinar",
    symbol: "د.ا",
    format: "comma",
    position: "before",
    space: true,
  },
  // japan yen (ex: ¥ 1,235) - 0 decimal places per ISO 4217
  JPY: {
    name: "Japan Yen",
    symbol: "¥",
    format: "comma",
    position: "before",
    space: true,
    decimals: 0,
  },
  // kenya shilling (ex: KSh 1,234.56)
  KES: {
    name: "Kenya Shilling",
    symbol: "KSh",
    format: "comma",
    position: "before",
    space: true,
  },
  // kyrgyzstan som (ex: 1,234.56 с)
  KGS: {
    name: "Kyrgyzstan Som",
    symbol: "с",
    format: "comma",
    position: "after",
    space: true,
  },
  // cambodia riel (ex: 1,234.56 ៛)
  KHR: {
    name: "Cambodia Riel",
    symbol: "៛",
    format: "comma",
    position: "after",
    space: true,
  },
  // comoros franc (ex: CF 1,234.56)
  KMF: {
    name: "Comoros Franc",
    symbol: "CF",
    format: "comma",
    position: "before",
    space: true,
  },
  // korea (north) won (ex: ₩ 1,234.56)
  KPW: {
    name: "Korea (North) Won",
    symbol: "₩",
    format: "comma",
    position: "before",
    space: true,
  },
  // korea (south) won (ex: ₩ 1,235) - 0 decimal places per ISO 4217
  KRW: {
    name: "Korea (South) Won",
    symbol: "₩",
    format: "comma",
    position: "before",
    space: true,
    decimals: 0,
  },
  // kuwait dinar (ex: د.ك 1,234.567) - 3 decimal places per ISO 4217
  KWD: {
    name: "Kuwait Dinar",
    symbol: "د.ك",
    format: "comma",
    position: "before",
    space: true,
    decimals: 3,
  },
  // cayman islands dollar (ex: CI$ 1,234.56)
  KYD: {
    name: "Cayman Islands Dollar",
    symbol: "CI$",
    format: "comma",
    position: "before",
    space: true,
  },
  // kazakhstan tenge (ex: 1,234.56 ₸)
  KZT: {
    name: "Kazakhstan Tenge",
    symbol: "₸",
    format: "comma",
    position: "after",
    space: true,
  },
  // laos kip (ex: 1,234.56 ₭)
  LAK: {
    name: "Laos Kip",
    symbol: "₭",
    format: "comma",
    position: "after",
    space: true,
  },
  // lebanon pound (ex: ل.ل 1,234.56)
  LBP: {
    name: "Lebanon Pound",
    symbol: "ل.ل",
    format: "comma",
    position: "before",
    space: true,
  },
  // sri lanka rupee (ex: Rs 1,234.56)
  LKR: {
    name: "Sri Lanka Rupee",
    symbol: "Rs",
    format: "comma",
    position: "before",
    space: true,
  },
  // liberia dollar (ex: L$ 1,234.56)
  LRD: {
    name: "Liberia Dollar",
    symbol: "L$",
    format: "comma",
    position: "before",
    space: true,
  },
  // lesotho loti (ex: L 1,234.56)
  LSL: {
    name: "Lesotho Loti",
    symbol: "L",
    format: "comma",
    position: "before",
    space: true,
  },
  // libya dinar (ex: 1,234.56 ل.د)
  LYD: {
    name: "Libya Dinar",
    symbol: "ل.د",
    format: "comma",
    position: "after",
    space: true,
  },
  // morocco dirham (ex: 1,234.56 .د.م.)
  MAD: {
    name: "Morocco Dirham",
    symbol: ".د.م.",
    format: "comma",
    position: "after",
    space: true,
  },
  // moldova leu (ex: 1,234.56 L)
  MDL: {
    name: "Moldova Leu",
    symbol: "L",
    format: "comma",
    position: "after",
    space: true,
  },
  // madagascar ariary (ex: Ar 1,234.56)
  MGA: {
    name: "Madagascar Ariary",
    symbol: "Ar",
    format: "comma",
    position: "before",
    space: true,
  },
  // macedonia denar (ex: ден 1,234.56)
  MKD: {
    name: "Macedonia Denar",
    symbol: "ден",
    format: "comma",
    position: "before",
    space: true,
  },
  // myanmar kyat (ex: K 1,234.56)
  MMK: {
    name: "Myanmar Kyat",
    symbol: "K",
    format: "comma",
    position: "before",
    space: true,
  },
  // mongolia tugrik (ex: 1,234.56 ₮)
  MNT: {
    name: "Mongolia Tugrik",
    symbol: "₮",
    format: "comma",
    position: "after",
    space: true,
  },
  // macau pataca (ex: MOP$ 1,234.56)
  MOP: {
    name: "Macau Pataca",
    symbol: "MOP$",
    format: "comma",
    position: "before",
    space: true,
  },
  // mauritania ouguiya (ex: UM 1,234.56)
  MRU: {
    name: "Mauritania Ouguiya",
    symbol: "UM",
    format: "comma",
    position: "before",
    space: true,
  },
  // mauritius rupee (ex: ₨ 1,234.56)
  MUR: {
    name: "Mauritius Rupee",
    symbol: "₨",
    format: "comma",
    position: "before",
    space: true,
  },
  // maldives rufiyaa (ex: Rf 1,234.56)
  MVR: {
    name: "Maldives Rufiyaa",
    symbol: "Rf",
    format: "comma",
    position: "before",
    space: true,
  },
  // malawi kwacha (ex: MK 1,234.56)
  MWK: {
    name: "Malawi Kwacha",
    symbol: "MK",
    format: "comma",
    position: "before",
    space: true,
  },
  // mexico peso (ex: $ 1,234.56)
  MXN: {
    name: "Mexico Peso",
    symbol: "$",
    format: "comma",
    position: "before",
    space: true,
  },
  // malaysia ringgit (ex: RM 1,234.56)
  MYR: {
    name: "Malaysia Ringgit",
    symbol: "RM",
    format: "comma",
    position: "before",
    space: true,
  },
  // mozambique metical (ex: MT 1,234.56)
  MZN: {
    name: "Mozambique Metical",
    symbol: "MT",
    format: "comma",
    position: "before",
    space: true,
  },
  // namibia dollar (ex: N$ 1,234.56)
  NAD: {
    name: "Namibia Dollar",
    symbol: "N$",
    format: "comma",
    position: "before",
    space: true,
  },
  // nigeria naira (ex: ₦1,234.56)
  NGN: {
    name: "Nigeria Naira",
    symbol: "₦",
    format: "comma",
    position: "before",
    space: false,
  },
  // nicaragua cordoba (ex: C$ 1,234.56)
  NIO: {
    name: "Nicaragua Cordoba",
    symbol: "C$",
    format: "comma",
    position: "before",
    space: true,
  },
  // norway krone (ex: kr 1,234.56)
  NOK: {
    name: "Norway Krone",
    symbol: "kr",
    format: "comma",
    position: "before",
    space: true,
  },
  // nepal rupee (ex: रू 1,234.56)
  NPR: {
    name: "Nepal Rupee",
    symbol: "रू",
    format: "comma",
    position: "before",
    space: true,
  },
  // new zealand dollar (ex: $ 1,234.56)
  NZD: {
    name: "New Zealand Dollar",
    symbol: "$",
    format: "comma",
    position: "before",
    space: true,
  },
  // oman rial (ex: 1,234.567 ر.ع.) - 3 decimal places per ISO 4217
  OMR: {
    name: "Oman Rial",
    symbol: "ر.ع.",
    format: "comma",
    position: "after",
    space: true,
    decimals: 3,
  },
  // panama balboa (ex: B/. 1,234.56)
  PAB: {
    name: "Panama Balboa",
    symbol: "B/.",
    format: "comma",
    position: "before",
    space: true,
  },
  // peruvian nuevo sol (ex: S/. 1,234.56)
  PEN: {
    name: "Peruvian Nuevo Sol",
    symbol: "S/.",
    format: "comma",
    position: "before",
    space: true,
  },
  // papua new guinea kina (ex: K 1,234.56)
  PGK: {
    name: "Papua New Guinea Kina",
    symbol: "K",
    format: "comma",
    position: "before",
    space: true,
  },
  // philippines peso (ex: ₱ 1,234.56)
  PHP: {
    name: "Philippines Peso",
    symbol: "₱",
    format: "comma",
    position: "before",
    space: true,
  },
  // pakistan rupee (ex: ₨ 1,234.56)
  PKR: {
    name: "Pakistan Rupee",
    symbol: "₨",
    format: "comma",
    position: "before",
    space: true,
  },
  // poland zloty (ex: 1.234,56 zł)
  PLN: {
    name: "Poland Zloty",
    symbol: "zł",
    format: "period",
    position: "after",
    space: true,
  },
  // paraguay guarani (ex: ₲1,234.56)
  PYG: {
    name: "Paraguay Guarani",
    symbol: "₲",
    format: "comma",
    position: "before",
    space: false,
  },
  // qatar riyal (ex: 1,234.56 ر.ق)
  QAR: {
    name: "Qatar Riyal",
    symbol: "ر.ق",
    format: "comma",
    position: "after",
    space: true,
  },
  // romania leu (ex: 1,234.56L)
  RON: {
    name: "Romania Leu",
    symbol: "L",
    format: "comma",
    position: "after",
    space: false,
  },
  // serbia dinar (ex: 1,234.56RSD)
  RSD: {
    name: "Serbia Dinar",
    symbol: "RSD",
    format: "comma",
    position: "after",
    space: false,
  },
  // russia ruble (ex: 1.234,56 p.)
  RUB: {
    name: "Russia Ruble",
    symbol: "p.",
    format: "period",
    position: "after",
    space: true,
  },
  // rwanda franc (ex: FRw 1,234.56)
  RWF: {
    name: "Rwanda Franc",
    symbol: "FRw",
    format: "comma",
    position: "before",
    space: true,
  },
  // saudi arabia riyal (ex: 1,234.56 ﷼)
  SAR: {
    name: "Saudi Arabia Riyal",
    symbol: "﷼",
    format: "comma",
    position: "after",
    space: true,
  },
  // solomon islands dollar (ex: SI$ 1,234.56)
  SBD: {
    name: "Solomon Islands Dollar",
    symbol: "SI$",
    format: "comma",
    position: "before",
    space: true,
  },
  // seychelles rupee (ex: ₨ 1,234.56)
  SCR: {
    name: "Seychelles Rupee",
    symbol: "₨",
    format: "comma",
    position: "before",
    space: true,
  },
  // sudan pound (ex: 1,234.56 ج.س.)
  SDG: {
    name: "Sudan Pound",
    symbol: "ج.س.",
    format: "comma",
    position: "after",
    space: true,
  },
  // sweden krona (ex: 1.234,56 kr)
  SEK: {
    name: "Sweden Krona",
    symbol: "kr",
    format: "period",
    position: "after",
    space: true,
  },
  // singapore dollar (ex: $1,234.56)
  SGD: {
    name: "Singapore Dollar",
    symbol: "$",
    format: "comma",
    position: "before",
    space: false,
  },
  // saint helena pound (ex: £1,234.56)
  SHP: {
    name: "Saint Helena Pound",
    symbol: "£",
    format: "comma",
    position: "before",
    space: false,
  },
  // sierra leone leone (ex: Le 1,234.56)
  SLL: {
    name: "Sierra Leone Leone",
    symbol: "Le",
    format: "comma",
    position: "before",
    space: true,
  },
  // somalia shilling (ex: S 1,234.56)
  SOS: {
    name: "Somalia Shilling",
    symbol: "S",
    format: "comma",
    position: "before",
    space: true,
  },
  // suriname dollar (ex: $ 1,234.56)
  SRD: {
    name: "Suriname Dollar",
    symbol: "$",
    format: "comma",
    position: "before",
    space: true,
  },
  // sao tome and principe dobra (ex: Db 1,234.56)
  STN: {
    name: "Sao Tome and Principe Dobra",
    symbol: "Db",
    format: "comma",
    position: "before",
    space: true,
  },
  // el salvador colon (ex: ₡1,234.56)
  SVC: {
    name: "El Salvador Colon",
    symbol: "₡",
    format: "comma",
    position: "before",
    space: false,
  },
  // syria pound (ex: £ 1,234.56)
  SYP: {
    name: "Syria Pound",
    symbol: "£",
    format: "comma",
    position: "before",
    space: true,
  },
  // eswatini lilangeni (ex: L 1,234.56)
  SZL: {
    name: "Eswatini Lilangeni",
    symbol: "L",
    format: "comma",
    position: "before",
    space: true,
  },
  // thailand baht (ex: 1,234.56 ฿)
  THB: {
    name: "Thailand Baht",
    symbol: "฿",
    format: "comma",
    position: "after",
    space: true,
  },
  // tajikistan somoni (ex: SM 1,234.56)
  TJS: {
    name: "Tajikistan Somoni",
    symbol: "SM",
    format: "comma",
    position: "before",
    space: true,
  },
  // turkmenistan manat (ex: m 1,234.56)
  TMT: {
    name: "Turkmenistan Manat",
    symbol: "m",
    format: "comma",
    position: "before",
    space: true,
  },
  // tunisia dinar (ex: 1.234,56 د.ت)
  TND: {
    name: "Tunisia Dinar",
    symbol: "د.ت",
    format: "period",
    position: "after",
    space: true,
  },
  // tonga pa'anga (ex: T$ 1,234.56)
  TOP: {
    name: "Tonga Pa'anga",
    symbol: "T$",
    format: "comma",
    position: "before",
    space: true,
  },
  // turkey lira (ex: 1,234.56 ₺)
  TRY: {
    name: "Turkey Lira",
    symbol: "₺",
    format: "comma",
    position: "after",
    space: true,
  },
  // trinidad and tobago dollar (ex: TT$ 1,234.56)
  TTD: {
    name: "Trinidad and Tobago Dollar",
    symbol: "TT$",
    format: "comma",
    position: "before",
    space: true,
  },
  // taiwan new dollar (ex: 元 1,234.56)
  TWD: {
    name: "Taiwan New Dollar",
    symbol: "元",
    format: "comma",
    position: "before",
    space: true,
  },
  // tanzania shilling (ex: TSh 1,234.56)
  TZS: {
    name: "Tanzania Shilling",
    symbol: "TSh",
    format: "comma",
    position: "before",
    space: true,
  },
  // ukraine hryvnia (ex: 1.234,56 ₴)
  UAH: {
    name: "Ukraine Hryvnia",
    symbol: "₴",
    format: "period",
    position: "after",
    space: true,
  },
  // uganda shilling (ex: USh 1,234.56)
  UGX: {
    name: "Uganda Shilling",
    symbol: "USh",
    format: "comma",
    position: "before",
    space: true,
  },
  // united states dollar (ex: $1,234.56)
  USD: {
    name: "United States Dollar",
    symbol: "$",
    format: "comma",
    position: "before",
    space: false,
  },
  // uruguay peso (ex: $U1.234,56)
  UYU: {
    name: "Uruguay Peso",
    symbol: "$U",
    format: "period",
    position: "before",
    space: false,
  },
  // uzbekistan som (ex: 1,234.56 so'm)
  UZS: {
    name: "Uzbekistan Som",
    symbol: "so'm",
    format: "comma",
    position: "after",
    space: true,
  },
  // venezuela bolivar soberano (ex: Bs. 1,234.56)
  VES: {
    name: "Venezuela Bolivar Soberano",
    symbol: "Bs.",
    format: "comma",
    position: "before",
    space: true,
  },
  // viet nam dong (ex: 1.234,56 ₫)
  VND: {
    name: "Viet Nam Dong",
    symbol: "₫",
    format: "period",
    position: "after",
    space: true,
  },
  // vanuatu vatu (ex: VT 1,234.56)
  VUV: {
    name: "Vanuatu Vatu",
    symbol: "VT",
    format: "comma",
    position: "before",
    space: true,
  },
  // samoa tala (ex: WS$ 1,234.56)
  WST: {
    name: "Samoa Tala",
    symbol: "WS$",
    format: "comma",
    position: "before",
    space: true,
  },
  // central african cfa franc (ex: FCFA 1,234.56)
  XAF: {
    name: "Central African CFA Franc",
    symbol: "FCFA",
    format: "comma",
    position: "before",
    space: true,
  },
  // east caribbean dollar (ex: EC$ 1,234.56)
  XCD: {
    name: "East Caribbean Dollar",
    symbol: "EC$",
    format: "comma",
    position: "before",
    space: true,
  },
  // west african cfa franc (ex: CFA 1,234.56)
  XOF: {
    name: "West African CFA Franc",
    symbol: "CFA",
    format: "comma",
    position: "before",
    space: true,
  },
  // cfp franc (ex: ₣ 1,234.56)
  XPF: {
    name: "CFP Franc",
    symbol: "₣",
    format: "comma",
    position: "before",
    space: true,
  },
  // yemen rial (ex: 1,234.56 ﷼)
  YER: {
    name: "Yemen Rial",
    symbol: "﷼",
    format: "comma",
    position: "after",
    space: true,
  },
  // south africa rand (ex: R 1,234.56)
  ZAR: {
    name: "South Africa Rand",
    symbol: "R",
    format: "comma",
    position: "before",
    space: true,
  },
  // zambia kwacha (ex: ZK 1,234.56)
  ZMW: {
    name: "Zambia Kwacha",
    symbol: "ZK",
    format: "comma",
    position: "before",
    space: true,
  },
  // zimbabwe dollar (ex: Z$ 1,234.56) - NOTE: obsolete, Zimbabwe now uses USD
  ZWL: {
    name: "Zimbabwe Dollar",
    symbol: "Z$",
    format: "comma",
    position: "before",
    space: true,
  },

  // INVALID/NON-ISO CODES (not included):
  // GGP - Guernsey Pound: NOT ISO 4217, uses GBP
  // IMP - Isle of Man Pound: NOT ISO 4217, uses GBP
  // JEP - Jersey Pound: NOT ISO 4217, uses GBP
  // SPL - Seborga Luigino: NOT ISO 4217, micronation currency
  // TVD - Tuvalu Dollar: NOT ISO 4217, Tuvalu uses AUD
  // XDR - IMF Special Drawing Rights: NOT a tradeable currency
  // VEF - Venezuela Bolivar Fuerte: OBSOLETE, replaced by VES
  // ZWD - Zimbabwe Dollar (old): OBSOLETE, replaced by ZWL
});

/**
 * Valid ISO 4217 currency codes supported by this library.
 *
 * Use this type for type-safe currency code parameters.
 * Includes 165+ currencies from USD to ZWL.
 *
 * @example
 * const code: CurrencyCode = 'USD'; // Valid
 * const code: CurrencyCode = 'XXX'; // TypeScript error
 */
export type CurrencyCode = keyof typeof CURRENCIES;
