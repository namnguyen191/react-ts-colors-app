import { WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { PalleteFooterProps } from '../Types/ComponentProps.type';
import styles from './styles';

type Props = PalleteFooterProps & WithStyles<typeof styles>;

function PalleteFooter(props: Props) {
  const { palleteName, emoji, classes } = props;
  return (
    <footer className={classes.PalleteFooter}>
      {palleteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(PalleteFooter);
