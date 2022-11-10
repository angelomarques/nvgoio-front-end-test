import { fireEvent, screen } from "@testing-library/react";
import Button from ".";
import { renderWithStyledComponents } from "../../utils/tests";

describe("Button Component", () => {
    it("should click the button", () => {
      const mockOnClick = jest.fn();
      renderWithStyledComponents(<Button onClick={mockOnClick}>Lorem ipsum</Button>);

      const button = screen.getByText("Lorem ipsum");

      fireEvent.click(button);

      expect(mockOnClick).toBeCalled();
    })
});
