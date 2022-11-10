import { TransactionItemType } from "../types/transactions";
import { getTransactionsSum } from "./transactions";

describe("transactions utils", () => {
    it("should sum the transaction items value", () => {
        const transactionItems: TransactionItemType[] = [
            { id: 1, name: "Item 1", value: 120, transactionType: "PURCHASE" },
            { id: 2, name: "Item 2", value: 1000, transactionType: "SALE" },
          ];

          expect(getTransactionsSum(transactionItems)).toBe(880);
    })
})