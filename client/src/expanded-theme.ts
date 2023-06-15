
// eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette"

declare module "@mui/material/styles/createPalette" {
  // extending properties that don't exist in PaletteColor into PaletteColor
  interface PaletteColor {
    [key: number]: string;
  }
  // also extending
  interface Palette {
    tertiary: PaletteColor;
  }
}