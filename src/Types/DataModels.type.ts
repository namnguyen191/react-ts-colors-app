import { ColorLevel } from './Other.type';

export type Color = {
  name: string;
  color: string;
  id?: string;
};

export type PaletteObj = {
  paletteName: string;
  id: string;
  emoji: string;
  colors: Color[];
};

export type GeneratedPaletteObj = {
  paletteName: string;
  id: string;
  emoji: string;
  colors: {
    [key: number]: ColorLevel[];
  };
};
