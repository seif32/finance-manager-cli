import { Account, Transaction } from "../types";

const accounts: Record<string, Account> = {
  "1": {
    id: "1",
    name: "Seif",
    balance: 1000,
    currency: "USD",
    type: "checking",
    createdAt: new Date(),
  },
  "2": {
    id: "2",
    name: "Sherif",
    balance: 250,
    currency: "EGP",
    type: "savings",
    createdAt: new Date(),
  },
  "3": {
    id: "3",
    name: "Khaled",
    balance: 1200,
    currency: "EUR",
    type: "investment",
    createdAt: new Date(),
  },
};

const transactions: Transaction[] = [];

export function getAccounts(): Record<string, Account> {
  return accounts;
}

export function getAccount(id: string): Account | undefined {
  return accounts[id];
}

export function addAccount(account: Account): Account {
  return (accounts[account.id] = account);
}
export function addTransaction(transaction: Transaction): Transaction {
  transactions.push(transaction);
  return transaction;
}

export function getTransactions(): Transaction[] {
  return transactions;
}
