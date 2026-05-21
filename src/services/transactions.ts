import { addTransaction } from "../data/store";
import { Transaction, TransactionType } from "../types";
import { adjustBalance } from "./accounts";

export function processTransaction(
  transaction: TransactionType,
  description?: string,
): Transaction {
  switch (transaction.kind) {
    case "deposit":
      adjustBalance(transaction.toAccountId, transaction.amount);
      const depositTransaction: Transaction = {
        id: Date.now().toString(),
        amount: transaction.amount,
        type: transaction,
        description,
        timestamp: new Date(),
      };

      return addTransaction(depositTransaction);
    case "withdrawal":
      adjustBalance(transaction.fromAccountId, -transaction.amount);
      const withdrawalTransaction: Transaction = {
        id: Date.now().toString(),
        amount: transaction.amount,
        type: transaction,
        description,
        timestamp: new Date(),
      };

      return addTransaction(withdrawalTransaction);
    case "transfer":
      adjustBalance(transaction.fromAccountId, -transaction.amount);
      adjustBalance(transaction.toAccountId, transaction.amount);
      const transferTransaction: Transaction = {
        id: Date.now().toString(),
        amount: transaction.amount,
        type: transaction,
        description,
        timestamp: new Date(),
      };

      return addTransaction(transferTransaction);
    default:
      const _never: never = transaction;
      throw new Error("Unknown transaction type");
  }
}
