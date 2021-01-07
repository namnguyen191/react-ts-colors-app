import { WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { PaletteFooterProps } from '../Types/ComponentProps.type';
import styles from './styles';

type Props = PaletteFooterProps & WithStyles<typeof styles>;

function PaletteFooter(props: Props) {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.PaletteFooter}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(PaletteFooter);
