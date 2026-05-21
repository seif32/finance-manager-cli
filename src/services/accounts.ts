import { addAccount } from "../data/store";
import { Account, CreateAccountPayload } from "../types";

export function createAccount(payload: CreateAccountPayload): Account {
  const newAccount: Account = {
    ...payload,
    id: Date.now().toString(),
    createdAt: new Date(),
  };

  return addAccount(newAccount);
}
