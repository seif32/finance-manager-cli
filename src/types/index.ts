type AccountType = "checking" | "savings" | "investment";

type Account = {
  id: string;
  name: string;
  balance: number;
  type: AccountType;
  currency: string;
  readonly createdAt: Date;
};

type TransactionType =
  | { kind: "deposit"; toAccountId: string }
  | { kind: "withdrawal"; fromAccountId: string }
  | { kind: "transfer"; fromAccountId: string; toAccountId: string };

type Transaction = {
  id: string;
  type: TransactionType;
  amount: number;
  description?: string;
  readonly timestamp: Date;
};

type AccountSummary = Pick<
  Account,
  "id" | "name" | "type" | "balance" | "currency"
>;

type CreateAccountPayload = Omit<Account, "id" | "createdAt">;

type UpdateAccountPayload = Partial<Omit<Account, "id" | "createdAt">>;

type ApiResponse<T> = {
  data: T;
  isSuccess: boolean;
};

type ExchangeRate = {
  result: string;
  base_code: string;
  rates: Record<string, number>;
};
