import { WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { MiniPaletteProps } from '../Types/ComponentProps.type';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles';
import { memo } from 'react';

type Props = MiniPaletteProps & WithStyles<typeof styles>;

function MiniPalette(props: Props) {
  const {
    classes,
    paletteName,
    emoji,
    colors,
    handleClick,
    id,
    openDialog
  } = props;

  console.log('Minipallete: ', paletteName);

  const miniColorBoxes = colors.map((color) => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    ></div>
  ));

  const deletePalette = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    event.stopPropagation();
    openDialog(id);
  };

  return (
    <div className={classes.root} onClick={() => handleClick(id)}>
      <DeleteIcon className={classes.deleteIcon} onClick={deletePalette} />
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default memo(withStyles(styles)(MiniPalette));
