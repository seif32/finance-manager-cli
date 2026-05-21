import { addAccount, getAccount } from "../data/store";
import { Account, CreateAccountPayload, UpdateAccountPayload } from "../types";

export function createAccount(payload: CreateAccountPayload): Account {
  const newAccount: Account = {
    ...payload,
    id: Date.now().toString(),
    createdAt: new Date(),
  };

  return addAccount(newAccount);
}

export function updateAccount(
  payload: UpdateAccountPayload,
  id: string,
): Account {
  const existingAccount = getAccount(id);

  if (!existingAccount)
    throw new Error(`No existing account with this id ${id}`);

  const updatedAccount = { ...existingAccount, ...payload };
  addAccount(updatedAccount);

  return updatedAccount;
}
