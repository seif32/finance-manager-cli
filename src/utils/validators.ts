import { Account, ExchangeRate } from "../types";

export function isAccount(value: unknown): value is Account {
  if (typeof value !== "object" || value === null) return false;

  const obj = value as Record<string, unknown>;

  return (
    typeof obj.id === "string" &&
    typeof obj.name === "string" &&
    typeof obj.balance === "number" &&
    typeof obj.currency === "string" &&
    ["checking", "savings", "investment"].includes(obj.type as string) &&
    obj.createdAt instanceof Date
  );
}

export function isExchangeRate(value: unknown): value is ExchangeRate {
  if (typeof value !== "object" || value === null) return false;

  const obj = value as Record<string, unknown>;

  return (
    typeof obj.result === "string" &&
    typeof obj.base_code === "string" &&
    obj.rates !== null &&
    typeof obj.rates === "object" &&
    Object.values(obj.rates as Record<string, unknown>).every(
      (v) => typeof v === "number",
    )
  );
}

export function isValidAmount(amount: number): boolean {
  return amount > 0 && Number.isFinite(amount);
}
