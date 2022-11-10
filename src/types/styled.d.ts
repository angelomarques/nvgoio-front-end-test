import "styled-components";
interface PaletteType {
  main: string;
  100?: string;
  300?: string;
  700?: string;
  900?: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      white: PaletteType;
      black: PaletteType;
      gray: PaletteType;
    };
  }
}
