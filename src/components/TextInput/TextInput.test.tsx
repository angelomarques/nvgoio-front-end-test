import { fireEvent, screen } from "@testing-library/react";
import TextInput from ".";
import { renderWithStyledComponents } from "../../utils/tests";

describe("TextInput Component", () => {
  it("should update its value", () => {
    renderWithStyledComponents(<TextInput label="Lorem ipsum" />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "input value" } });

    expect(screen.getByDisplayValue("input value")).toBeInTheDocument();
  });

  it("should format the value", () => {
    renderWithStyledComponents(<TextInput label="Lorem ipsum" currency value={100} onChange={() => {}} />);

    const input = screen.getByRole("textbox");

    expect(screen.getByDisplayValue("R$ 100,00")).toBeInTheDocument();
  })
});
