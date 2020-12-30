import { ColorLevel } from './Other.type';

export type Color = {
  name: string;
  color: string;
  id?: string;
};

export type PalleteObj = {
  paletteName: string;
  id: string;
  emoji: string;
  colors: Color[];
};

export type GeneratedPalleteObj = {
  palleteName: string;
  id: string;
  emoji: string;
  colors: {
    [key: number]: ColorLevel[];
  };
};
