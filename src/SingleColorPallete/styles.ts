import { createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    Pallete: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    },
    PalleteColors: {
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
      }
    }
  });

export default styles;
