import { fireEvent, screen } from "@testing-library/react";
import TransactionsForm from ".";
import { formatAmount } from "../../utils/formatAmount";
import { renderWithStyledComponents } from "../../utils/tests";

describe("TransactionsForm Component", () => {
  const transactionType = "Venda";
  const productName = "Lorem ipsum";
  const productValue = "100";

  it("should submit a transaction", () => {
    const mockOnSubmit = jest.fn();
    renderWithStyledComponents(<TransactionsForm onSubmit={mockOnSubmit} />);

    const selectInput = screen.getByRole("combobox");

    fireEvent.click(selectInput);
    fireEvent.change(selectInput, { target: { value: "Venda" } });
    fireEvent.keyDown(selectInput, {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });

    const productNameInput = screen.getByRole("textbox", { name: "product-name" });

    fireEvent.change(productNameInput, { target: { value: "Lorem ipsum" } });

    const productValueInput = screen.getByRole("textbox", { name: "product-value" });

    fireEvent.change(productValueInput, { target: { value: "R$ 100,00" } });

    const submitButton = screen.getByText("Adicionar transação");

    fireEvent.click(submitButton);

    expect(mockOnSubmit).toBeCalled();

    expect(screen.queryByText("Venda")).not.toBeInTheDocument();
    expect(screen.queryByDisplayValue(productName)).not.toBeInTheDocument();
    expect(screen.queryByDisplayValue(formatAmount(productValue))).not.toBeInTheDocument();
  });
});
