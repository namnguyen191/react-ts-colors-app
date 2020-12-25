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

export type { PalleteObj };
