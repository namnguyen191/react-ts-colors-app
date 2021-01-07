import { createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    Palette: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    },
    PaletteColors: {
      height: '90%'
    },
    PaletteFooter: {
      backgroundColor: 'white',
      height: '5vh',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: '1.6rem'
    },
    emoji: {
      fontSize: '2.4rem',
      margin: '0 1.6rem'
    }
  });

export default styles;
