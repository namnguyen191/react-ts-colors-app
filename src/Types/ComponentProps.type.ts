import { RouteComponentProps } from 'react-router-dom';
import { PalleteChangeLevel } from '../Pallete/Pallete';
import { Color, GeneratedPalleteObj, PalleteObj } from './DataModels.type';
import { ColorFormat } from './Other.type';

export type ColorBoxProps = {
  color: Color;
  moreUrl: string;
  showLink: boolean;
};

export type MiniPalleteProps = PalleteObj & {
  handleClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export type NavbarProps = {
  level?: number;
  changeLevel?: PalleteChangeLevel;
  handleChange: (val: ColorFormat) => void;
};

export type PalleteProps = {
  pallete: GeneratedPalleteObj;
};

export type PalleteFooterProps = {
  palleteName: string;
  emoji: string;
};

export type PalleteListProps = RouteComponentProps & {
  palletes: PalleteObj[];
};

export type SingleColorPalleteProps = {
  pallete: GeneratedPalleteObj;
  colorId: string;
};
