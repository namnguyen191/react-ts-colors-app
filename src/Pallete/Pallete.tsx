import { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox';

import Navbar from '../Navbar/Navbar';
import PalleteFooter from '../PalleteFooter/PalleteFooter';
import { PalleteProps } from '../Types/ComponentProps.type';
import { PalleteStates } from '../Types/ComponentStates.type';
import { ColorFormat } from '../Types/Other.type';
import styles from './styles';
import { WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

type Props = PalleteProps & WithStyles<typeof styles>;

class Pallete extends Component<Props, PalleteStates> {
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
    const { colors, palleteName, emoji, id } = this.props.pallete;
    const { level, format } = this.state;
    const { classes } = this.props;

    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        color={{
          name: color.name,
          color: color[format]
        }}
        key={color.name}
        moreUrl={`/pallete/${id}/${color.id}`}
        showLink={true}
      />
    ));

    return (
      <div className={classes.Pallete}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        <div className={classes.PalleteColors}>{colorBoxes}</div>
        <PalleteFooter palleteName={palleteName} emoji={emoji} />
      </div>
    );
  }
}

export type PalleteChangeLevel = Pallete['changeLevel'];

export default withStyles(styles)(Pallete);
