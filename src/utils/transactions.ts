import { TransactionItemType } from "../types/transactions";

export const getTransactionsSum = (transactionItems: TransactionItemType[]) => {
  return transactionItems.reduce((prev, currentValue) => {
    switch (currentValue.transactionType) {
      case "PURCHASE":
        return prev - currentValue.value;
      case "SALE":
        return prev + currentValue.value;
    }
  }, 0);
};
