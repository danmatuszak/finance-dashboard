import { PaletteColor } from '@mui/material/styles';

// Extend the interface PaletteColor
interface ExtendedPaletteColor extends PaletteColor {
  [key: number]: string;
}

// Define an interface for the extended Palette
interface ExtendedPalette extends Palette {
  primary: ExtendedPaletteColor;
  secondary: ExtendedPaletteColor;
  tertiary: ExtendedPaletteColor;
  grey: ExtendedPaletteColor;
  error: ExtendedPaletteColor;
  warning: ExtendedPaletteColor;
  info: ExtendedPaletteColor;
  success: ExtendedPaletteColor;
}

// Extend the interface Theme
declare module '@mui/material/styles' {
  interface Theme {
    palette: ExtendedPalette;
  }
}

// Ability use palette.secondary[500] or any other numerical key without TypeScript errors