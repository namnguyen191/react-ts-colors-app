import { WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import * as React from 'react';
import { Link } from 'react-router-dom';
import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../Navbar/Navbar';
import PaletteFooter from '../PaletteFooter/PaletteFooter';
import { SingleColorPaletteProps } from '../Types/ComponentProps.type';
import { SingleColorPaletteStates } from '../Types/ComponentStates.type';
import { GeneratedPaletteObj } from '../Types/DataModels.type';
import { ColorFormat, ColorLevel } from '../Types/Other.type';
import styles from './styles';

type Props = SingleColorPaletteProps & WithStyles<typeof styles>;

class SingleColorPalette extends React.Component<
  Props,
  SingleColorPaletteStates
> {
  private _shades: ColorLevel[];
  constructor(props: Props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: 'hex' };
    this.changeFormat = this.changeFormat.bind(this);
  }

  gatherShades(palette: GeneratedPaletteObj, colorToFilterBy: string) {
    // Return all shades of given color
    let shades: ColorLevel[] = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      const correctColor = allColors[key].filter(
        (color) => color.id === colorToFilterBy
      );
      shades.push(correctColor[0]);
    }
    // Remove value at 50
    return shades.slice(1);
  }

  changeFormat(val: ColorFormat) {
    this.setState({ format: val });
  }

  render() {
    const { format } = this.state;
    const { paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;

    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        color={{ name: color.name, color: color[format] }}
        showLink={false}
        moreUrl="/"
        key={`${color.id + color.name}`}
      />
    ));

    return (
      <div className={classes.Palette}>
        <Navbar handleChange={this.changeFormat} />
        <div className={classes.PaletteColors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`} className="back-button">
              GO BACK
            </Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
