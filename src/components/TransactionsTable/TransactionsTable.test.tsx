import { screen } from "@testing-library/react";
import TransactionsTable from ".";
import { TransactionItemType } from "../../types/transactions";
import { formatAmount, getRawAmount } from "../../utils/formatAmount";
import { renderWithStyledComponents } from "../../utils/tests";
import { getTransactionsSum } from "../../utils/transactions";

describe("TransactionsTable Component", () => {
  const transactionItems: TransactionItemType[] = [
    { id: 1, name: "Item 1", value: 120, transactionType: "PURCHASE" },
    { id: 2, name: "Item 2", value: 1000, transactionType: "SALE" },
  ];

  it("should show the transaction items", () => {
    renderWithStyledComponents(
      <TransactionsTable transactionItems={transactionItems} />
    );

    expect(screen.getByText(transactionItems[0].name)).toBeInTheDocument;
    expect(screen.getByText(transactionItems[1].name)).toBeInTheDocument;
  });

  it("should show the transaction items total", () => {
    renderWithStyledComponents(
      <TransactionsTable transactionItems={transactionItems} />
    );

    const totalFormatted = formatAmount(getTransactionsSum(transactionItems));
    expect(screen.getByText(totalFormatted)).toBeInTheDocument();
  })
});
