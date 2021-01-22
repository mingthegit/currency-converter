export enum Currency {
  GBP = "GBP",
  EUR = "EUR",
  USD = "USD",
  CAD = "CAD",
  CNY = "CNY",
  JPY = "JPY",
  RUB = "RUB",
  HKD = "HKD",
}

export const CurrencyOptions = [
  { value: Currency.GBP, label: "Pound sterling (GBP)" },
  { value: Currency.EUR, label: "Euro (EUR)" },
  { value: Currency.USD, label: "United States Dollar (USD)" },
  { value: Currency.CAD, label: "Canadian Dollar (CAD)" },
  { value: Currency.CNY, label: "Chinese Yuan (CNY)" },
  { value: Currency.JPY, label: "Japanese Yen (JPY)" },
  { value: Currency.RUB, label: "Russian Ruble (RUB)" },
  { value: Currency.HKD, label: "Hong Kong Dollar (HKD)" },
];

export type NullableNumber = number | undefined;

export type FormSchema = {
  base: Currency;
  target: Currency;
  amount: NullableNumber;
};

export enum CurrencySource {
  Base = "base",
  Target = "target",
}

export enum DateRange {
  FiveDays = "5D",
  OneMonth = "1M",
  OneYear = "1Y",
}
export interface GraphPoint {
  date: string;
  rate: number;
}

export type Rates = {
  [currency in Currency]: number;
};

export interface ExchangeRateResponseObject {
  base: string;
  rates: Rates;
}

export type HistoryRates = {
  [date: string]: Rates;
};

export interface HistoryResponseObject {
  base: string;
  rates: HistoryRates;
}
