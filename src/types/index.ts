export type AccountType = "checking" | "savings" | "investment";

export type Account = {
  id: string;
  name: string;
  balance: number;
  type: AccountType;
  currency: string;
  readonly createdAt: Date;
};

export type TransactionType =
  | { kind: "deposit"; toAccountId: string; amount: number }
  | { kind: "withdrawal"; fromAccountId: string; amount: number }
  | {
      kind: "transfer";
      fromAccountId: string;
      toAccountId: string;
      amount: number;
    };

export type Transaction = {
  id: string;
  type: TransactionType;
  amount: number;
  description?: string;
  readonly timestamp: Date;
};

export type AccountSummary = Pick<
  Account,
  "id" | "name" | "type" | "balance" | "currency"
>;

export type CreateAccountPayload = Omit<Account, "id" | "createdAt">;

export type UpdateAccountPayload = Partial<Omit<Account, "id" | "createdAt">>;

export type ApiResponse<T> = {
  data: T;
  isSuccess: boolean;
};

export type ExchangeRate = {
  result: string;
  base_code: string;
  rates: Record<string, number>;
};
