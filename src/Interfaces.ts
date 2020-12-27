import { ColorLevel } from './colorHelper';

type PalleteObj = {
  paletteName: string;
  id: string;
  emoji: string;
  colors: Color[];
};

type Color = {
  name: string;
  color: string;
};

type GeneratedPalleteObj = {
  palleteName: string;
  id: string;
  emoji: string;
  colors: {
    [key: number]: ColorLevel[];
  };
};

export type { PalleteObj, Color, GeneratedPalleteObj };
