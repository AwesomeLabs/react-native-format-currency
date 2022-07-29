declare module "react-native-format-currency" {
  export function formatCurrency(
    amount: number,
    code: string
  ): [string, number, string];
  export function getSupportedCurrencies(): [{ code: string; name: string }];
}
