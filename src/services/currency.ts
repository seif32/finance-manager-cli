import { ExchangeRate } from "../types";
import { isExchangeRate } from "../utils/validators";

export async function fetchExchangeRates(): Promise<ExchangeRate> {
  const response = await fetch("https://open.er-api.com/v6/latest/USD");
  if (!response.ok) {
    throw new Error("Response of exchange data failed");
  }
  const data: unknown = await response.json();

  if (!isExchangeRate(data)) {
    throw new Error("Not a correct type of what we have");
  }
  return data;
}

export function convertBalance(
  amount: number,
  fromCurrency: string,
  toCurrency: string,
  rates: ExchangeRate,
): number {
  const amountFrom = amount / rates.rates[fromCurrency];
  const amountTo = amountFrom * rates.rates[toCurrency];

  return amountTo;
}
