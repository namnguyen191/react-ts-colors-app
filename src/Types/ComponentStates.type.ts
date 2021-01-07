import { ColorFormat } from './Other.type';

export type ColorBoxStates = {
  copied: boolean;
};

export type NavbarStates = {
  format: ColorFormat;
  open: boolean;
};

export type PaletteStates = {
  level: number;
  format: ColorFormat;
};

export type SingleColorPaletteStates = {
  format: ColorFormat;
};

export type NewPaletteFormStates = {
  open: boolean;
};
