import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    picker: {
      width: '100% !important',
      marginTop: '3.2rem'
    },
    addColor: {
      width: '100%',
      padding: '1.6rem',
      marginTop: '1.6rem',
      fontSize: '3.2rem'
    },
    colorNameInput: {
      width: '100%',
      height: '7rem'
    }
  })
);

export default useStyles;
