import { WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import * as React from 'react';
import { Link } from 'react-router-dom';
import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../Navbar/Navbar';
import PalleteFooter from '../PalleteFooter/PalleteFooter';
import { SingleColorPalleteProps } from '../Types/ComponentProps.type';
import { SingleColorPalleteStates } from '../Types/ComponentStates.type';
import { GeneratedPalleteObj } from '../Types/DataModels.type';
import { ColorFormat, ColorLevel } from '../Types/Other.type';
import styles from './styles';

type Props = SingleColorPalleteProps & WithStyles<typeof styles>;

class SingleColorPallete extends React.Component<
  Props,
  SingleColorPalleteStates
> {
  private _shades: ColorLevel[];
  constructor(props: Props) {
    super(props);
    this._shades = this.gatherShades(this.props.pallete, this.props.colorId);
    this.state = { format: 'hex' };
    this.changeFormat = this.changeFormat.bind(this);
  }

  gatherShades(pallete: GeneratedPalleteObj, colorToFilterBy: string) {
    // Return all shades of given color
    let shades: ColorLevel[] = [];
    let allColors = pallete.colors;
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
    const { palleteName, emoji, id } = this.props.pallete;
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
      <div className={classes.Pallete}>
        <Navbar handleChange={this.changeFormat} />
        <div className={classes.PalleteColors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/pallete/${id}`} className="back-button">
              GO BACK
            </Link>
          </div>
        </div>
        <PalleteFooter palleteName={palleteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPallete);
