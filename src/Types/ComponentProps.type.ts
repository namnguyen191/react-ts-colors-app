import { RouteComponentProps } from 'react-router-dom';
import { PaletteChangeLevel } from '../Palette/Palette';
import { Color, GeneratedPaletteObj, PaletteObj } from './DataModels.type';
import { ColorFormat } from './Other.type';

export type ColorBoxProps = {
  color: Color;
  moreUrl: string;
  showLink: boolean;
};

export type MiniPaletteProps = PaletteObj & {
  handleClick: (id: string) => void;
  id: string;
  openDialog: (id: string) => void;
};

export type NavbarProps = {
  level?: number;
  changeLevel?: PaletteChangeLevel;
  handleChange: (val: ColorFormat) => void;
};

export type PaletteProps = {
  palette: GeneratedPaletteObj;
};

export type PaletteFooterProps = {
  paletteName: string;
  emoji: string;
};

export type PaletteListProps = RouteComponentProps & {
  palettes: PaletteObj[];
  deletePalette: (id: string) => void;
};

export type SingleColorPaletteProps = {
  palette: GeneratedPaletteObj;
  colorId: string;
};

export type NewPaletteFormProps = {};
