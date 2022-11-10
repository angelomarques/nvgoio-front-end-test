import { fireEvent, screen } from "@testing-library/react";
import Select from ".";
import { OptionType } from "../../types/transactions";
import { renderWithStyledComponents } from "../../utils/tests";

describe("Select Component", () => {
  const selectOptions: OptionType[] = [
    { value: "purchase", label: "Compra" },
    { value: "sale", label: "Venda" },
  ];
  const labelText = "Tipo de transação";

  it("should have a valid value", () => {
    renderWithStyledComponents(
      <Select options={selectOptions} label={labelText} value={selectOptions[0]} onChange={() => {}} />
    );

    expect(screen.getByText(selectOptions[0].label)).toBeInTheDocument();
  })

  it("should show the option", () => {
    renderWithStyledComponents(
      <Select options={selectOptions} label={labelText} value={null} onChange={() => {}} />
    );

    const selectInput = screen.getByRole("combobox");

    fireEvent.click(selectInput);
    fireEvent.change(selectInput, { target: { value: "Venda" } });

    expect(screen.getByText("Venda")).toBeInTheDocument();
  });

  it("should change the select", () => {
    const mockOnChange = jest.fn();
    renderWithStyledComponents(
      <Select options={selectOptions} label={labelText} value={null} onChange={mockOnChange} />
    );

    const selectInput = screen.getByRole("combobox");

    fireEvent.click(selectInput);
    fireEvent.change(selectInput, { target: { value: "Venda" } });
    fireEvent.keyDown(selectInput, {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });

    expect(mockOnChange).toBeCalled();
  })
});
