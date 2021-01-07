import { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox';

import Navbar from '../Navbar/Navbar';
import PaletteFooter from '../PaletteFooter/PaletteFooter';
import { PaletteProps } from '../Types/ComponentProps.type';
import { PaletteStates } from '../Types/ComponentStates.type';
import { ColorFormat } from '../Types/Other.type';
import styles from './styles';
import { WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

type Props = PaletteProps & WithStyles<typeof styles>;

class Palette extends Component<Props, PaletteStates> {
  constructor(props: Props) {
    super(props);
    this.state = { level: 500, format: 'hex' };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(newLevel: number) {
    this.setState({ level: newLevel });
  }

  changeFormat(val: ColorFormat) {
    this.setState({ format: val });
  }

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    const { classes } = this.props;

    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        color={{
          name: color.name,
          color: color[format]
        }}
        key={color.name}
        moreUrl={`/palette/${id}/${color.id}`}
        showLink={true}
      />
    ));

    return (
      <div className={classes.Palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        <div className={classes.PaletteColors}>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export type PaletteChangeLevel = Palette['changeLevel'];

export default withStyles(styles)(Palette);
