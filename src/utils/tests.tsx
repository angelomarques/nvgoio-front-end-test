import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import { defaultTheme } from "../styles/theme";

export const renderWithStyledComponents = (Component: ReactElement) => {
  return render(
    <ThemeProvider theme={defaultTheme}>{Component}</ThemeProvider>
  );
};
