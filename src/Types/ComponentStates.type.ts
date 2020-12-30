import { ColorFormat } from './Other.type';

export type ColorBoxStates = {
  copied: boolean;
};

export type NavbarStates = {
  format: ColorFormat;
  open: boolean;
};

export type PalleteStates = {
  level: number;
  format: ColorFormat;
};

export type SingleColorPalleteStates = {
  format: ColorFormat;
};
