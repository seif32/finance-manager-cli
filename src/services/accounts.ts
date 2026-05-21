import { addAccount, getAccount, getAccounts } from "../data/store";
import {
  Account,
  AccountSummary,
  CreateAccountPayload,
  UpdateAccountPayload,
} from "../types";

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

export function getAccountSummary(id: string): AccountSummary {
  const existingAccount = getAccount(id);

  if (!existingAccount)
    throw new Error(`No existing account with this id ${id}`);

  const {
    id: existingAccountId,
    balance,
    currency,
    name,
    type,
  } = existingAccount;

  return { id: existingAccountId, balance, currency, name, type };
}

export function getAllSummaries(): AccountSummary[] {
  const allAccountsRecords = getAccounts();
  return Object.values(allAccountsRecords).map((account) => {
    return {
      id: account.id,
      balance: account.balance,
      currency: account.currency,
      name: account.name,
      type: account.type,
    };
  });
}
