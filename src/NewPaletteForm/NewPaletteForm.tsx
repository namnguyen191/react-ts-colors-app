import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import useStyles from './styles';
import { Button } from '@material-ui/core';
import { Color, PaletteObj } from '../Types/DataModels.type';
import { AppSavePaletteFunc } from '../App/App';
import { RouteComponentProps } from 'react-router-dom';
import DraggableColorList from '../DraggableColorList/DraggableColorList';
import { arrayMove, SortEndHandler } from 'react-sortable-hoc';
import PaletteFormNav from '../PaletteFormNav/PaletteFormNav';
import ColorPickerForm from '../ColorPickerForm/ColorPickerForm';
import seedColors from '../seedColors';

type Props = RouteComponentProps & {
  savePalette: AppSavePaletteFunc;
  palettes: PaletteObj[];
  maxNumOfPalette?: number;
};

function NewPaletteForm({
  savePalette,
  palettes,
  maxNumOfPalette = 20,
  history
}: Props): JSX.Element {
  // Styles sheet
  const classes = useStyles();
  const theme = useTheme();
  // States
  // Required for material-ui
  const [open, setOpen] = React.useState(true);
  const [colors, setColors] = React.useState<Color[]>(seedColors[0].colors);

  // Required for material-ui
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // Required for material-ui
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = (newColor: Color) => {
    setColors([...colors, newColor]);

    // setNewColorName('');
  };

  const paletteIsFull = colors.length >= maxNumOfPalette;

  const handleSubmit = (newPaletteName: string, emoji: string) => {
    const newPalette: PaletteObj = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, '-'),
      emoji: emoji,
      colors: colors
    };
    savePalette(newPalette);
    history.push('/');
  };

  const deleteColor = (colorName: string) => {
    setColors(colors.filter((color) => color.name !== colorName));
  };

  const onSortEnd: SortEndHandler = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  const allColors = seedColors.map((p) => p.colors).flat();

  const addRandomColor = () => {
    // Pick a random color from all the existing palettes
    let randomIndex = Math.floor(Math.random() * allColors.length);
    let randomColor = allColors[randomIndex];
    // Check if there's exist a color box for it already
    const isDuplicate =
      colors.findIndex((color) => color.name === randomColor.name) !== -1;
    if (isDuplicate) {
      addRandomColor();
    } else {
      setColors([...colors, randomColor]);
    }
  };

  return (
    <div className={classes.root}>
      <PaletteFormNav
        open={open}
        palettes={palettes}
        handleSubmit={handleSubmit}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <div className={classes.container}>
          <Typography variant="h4" gutterBottom>
            Design Your Palette
          </Typography>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setColors([])}
              className={classes.button}
            >
              Clear Palette
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={addRandomColor}
              disabled={paletteIsFull}
              className={classes.button}
            >
              {paletteIsFull ? 'Palette Full' : 'Random Color'}
            </Button>
          </div>
          <ColorPickerForm
            paletteIsFull={paletteIsFull}
            addColor={addNewColor}
            colors={colors}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList
          colors={colors}
          deleteColor={deleteColor}
          axis="xy"
          onSortEnd={onSortEnd}
          distance={20}
        />
      </main>
    </div>
  );
}

export default NewPaletteForm;
