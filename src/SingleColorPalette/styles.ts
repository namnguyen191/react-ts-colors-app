import { createStyles, Theme } from '@material-ui/core';
import { sizes } from '../GlobalCssConst';

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
    goBack: {
      width: '20%',
      height: '50%',
      margin: '0 auto',
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      marginBottom: '-0.35rem',
      opacity: 1,
      backgroundColor: 'black',
      '& a': {
        color: 'white',
        width: '10rem',
        height: '3rem',
        position: 'absolute',
        display: 'inline-block',
        top: '50%',
        left: '50%',
        marginLeft: '-5rem',
        marginTop: '-1.5rem',
        textAlign: 'center',
        outline: 'none',
        background: 'rgba(255, 255, 255, 0.3)',
        fontSize: '1.6rem',
        lineHeight: '3rem',
        textTransform: 'uppercase',
        border: 'none',
        textDecoration: 'none'
      },
      [sizes.down('lg')]: {
        height: '33.333%',
        width: '25%'
      },
      [sizes.down('md')]: {
        height: '20%',
        width: '50%'
      },
      [sizes.down('xs')]: {
        height: '10%',
        width: '100%'
      }
    }
  });

export default styles;
