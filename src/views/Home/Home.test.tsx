import { fireEvent, screen } from "@testing-library/react";
import Home from ".";
import { renderWithStyledComponents } from "../../utils/tests";

describe("Home Component", () => {
  const transactionItems = [
    { id: 1, name: "Item 1", value: 120, transactionType: "PURCHASE" },
    { id: 2, name: "Item 2", value: 1000, transactionType: "SALE" },
  ];

  it("should add a transaction", () => {
    renderWithStyledComponents(<Home />);

    const selectInput = screen.getByRole("combobox");

    fireEvent.click(selectInput);
    fireEvent.change(selectInput, { target: { value: "Venda" } });
    fireEvent.keyDown(selectInput, {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });

    const productNameInput = screen.getByRole("textbox", {
      name: "product-name",
    });

    fireEvent.change(productNameInput, { target: { value: "Item 3" } });

    const productValueInput = screen.getByRole("textbox", {
      name: "product-value",
    });

    fireEvent.change(productValueInput, { target: { value: "R$ 2000,00" } });

    const submitButton = screen.getByText("Adicionar transação");

    fireEvent.click(submitButton);

    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });

  it("should persist the data in the localstorage", () => {
    const localStorageMock = (() => {
      let store = {} as { [key: string]: string };

      return {
        getItem(key: string) {
          return store[key];
        },

        setItem(key: string, value: string) {
          store[key] = value;
        },

        clear() {
          store = {};
        },

        removeItem(key: string) {
          delete store[key];
        },

        getAll() {
          return store;
        },
      };
    })();

    Object.defineProperty(window, "localStorage", { value: localStorageMock });

    renderWithStyledComponents(<Home />);

    const selectInput = screen.getByRole("combobox");

    fireEvent.click(selectInput);
    fireEvent.change(selectInput, { target: { value: "Venda" } });
    fireEvent.keyDown(selectInput, {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });

    const productNameInput = screen.getByRole("textbox", {
      name: "product-name",
    });

    fireEvent.change(productNameInput, { target: { value: "Item 3" } });

    const productValueInput = screen.getByRole("textbox", {
      name: "product-value",
    });

    fireEvent.change(productValueInput, { target: { value: "R$ 2000,00" } });

    const submitButton = screen.getByText("Adicionar transação");

    fireEvent.click(submitButton);

    transactionItems.push({
      id: 3,
      name: "Item 3",
      value: 2000,
      transactionType: "SALE",
    });

    expect(window.localStorage.getItem("transactionItems")).toEqual(JSON.stringify(transactionItems))
  });
});
