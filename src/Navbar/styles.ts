import { createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    Navbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '6vh'
    },
    logo: {
      marginRight: '1.5rem',
      padding: '0 1.3rem',
      fontSize: '2.2rem',
      backgroundColor: '#eceff1',
      fontFamily: 'Roboto',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      '& a': {
        textDecoration: 'none',
        color: 'black'
      }
    },
    slider: {
      width: '34rem',
      margin: '0 1rem',
      display: 'inline-block',
      '& .rc-slider-rail': {
        height: '0.8rem'
      },
      '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus': {
        backgroundColor: 'green',
        outline: 'none',
        border: '0.2rem solid green',
        boxShadow: 'none',
        width: '1.3rem',
        height: '1.3rem',
        marginLeft: '-0.7rem',
        marginTop: '-0.3rem'
      },
      '& .rc-slider-track': {
        backgroundColor: 'transparent'
      }
    },
    selectContainer: {
      marginLeft: 'auto',
      marginRight: '1.6rem'
    },
    messageId: {
      fontSize: '1.6rem'
    }
  });

export default styles;
