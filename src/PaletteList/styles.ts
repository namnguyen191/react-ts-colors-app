import { createStyles, Theme } from '@material-ui/core';
import { sizes } from '../GlobalCssConst';

const styles = (theme: Theme) =>
  createStyles({
    '@global': {
      '.item-enter': {
        opacity: 0
      },
      '.item-enter-active': {
        opacity: 1,
        transition: 'opacity 300ms ease-in'
      },
      '.item-exit': {
        opacity: 1
      },
      '.item-exit-active': {
        opacity: 0,
        transition: 'opacity 300ms ease-in'
      }
    },
    root: {
      backgroundColor: 'blue',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
      backgroundSize: '400% 400%',
      animation: '$gradient 10s ease infinite'
    },
    heading: {
      fontSize: '3.2rem'
    },
    container: {
      width: '50%',
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      flexWrap: 'wrap',
      [sizes.down('xl')]: {
        width: '80%'
      },
      [sizes.down('xs')]: {
        width: '70%'
      }
    },
    nav: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
      fontSize: '1.6rem',
      margin: '2rem',
      '& a': {
        color: 'white',
        textDecoration: 'none'
      }
    },
    palettes: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2rem',
      marginBottom: '2rem',
      [sizes.down('md')]: {
        gridTemplateColumns: '1fr 1fr'
      },
      [sizes.down('xs')]: {
        gridTemplateColumns: '1fr'
      }
    },
    '@keyframes gradient': {
      '0%': {
        backgroundPosition: '0% 50%'
      },
      '50%': {
        backgroundPosition: '100% 50%'
      },
      '100%': {
        backgroundPosition: '0% 50%'
      }
    }
  });

export default styles;
