import {
  convertBalance,
  getAccountBalancesInCurrency,
} from "./services/currency";
import {
  getTransactionSummary,
  processTransaction,
} from "./services/transactions";

async function main() {
  processTransaction({ amount: 200, toAccountId: "1", kind: "deposit" });
  processTransaction({ amount: 500, toAccountId: "2", kind: "deposit" });
  processTransaction({ amount: 250, toAccountId: "1", kind: "deposit" });
  processTransaction({ amount: 750, toAccountId: "1", kind: "deposit" });

  processTransaction({ amount: 120, fromAccountId: "1", kind: "withdrawal" });
  processTransaction({ amount: 20, fromAccountId: "1", kind: "withdrawal" });
  processTransaction({ amount: 40, fromAccountId: "1", kind: "withdrawal" });
  processTransaction({ amount: 80, fromAccountId: "2", kind: "withdrawal" });
  processTransaction({ amount: 90, fromAccountId: "2", kind: "withdrawal" });

  processTransaction({
    amount: 201,
    fromAccountId: "1",
    toAccountId: "2",
    kind: "transfer",
  });
  processTransaction({
    amount: 202,
    fromAccountId: "2",
    toAccountId: "1",
    kind: "transfer",
  });

  console.log(await getAccountBalancesInCurrency("USD"));
}

main();
