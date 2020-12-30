import { WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Component } from 'react';
import MiniPallete from '../MiniPallete/MiniPallete';
import { PalleteListProps } from '../Types/ComponentProps.type';
import styles from './styles';

type Props = PalleteListProps & WithStyles<typeof styles>;

class PalleteList extends Component<Props> {
  goToPallete(id: string) {
    this.props.history.push(`/pallete/${id}`);
  }

  render() {
    const { palletes, classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
          </nav>
          <div className={classes.palletes}>
            {palletes.map((pallete) => (
              <MiniPallete
                {...pallete}
                handleClick={() => this.goToPallete(pallete.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PalleteList);
