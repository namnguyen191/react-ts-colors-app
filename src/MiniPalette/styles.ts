import { createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'white',
      border: '1px solid black',
      borderRadius: '.5rem',
      padding: '0.8rem',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      '&:hover svg': {
        opacity: 1
      }
    },
    colors: {
      backgroundColor: '#dae1e4',
      height: '15rem',
      width: '100%',
      borderRadius: '.5rem',
      overflow: 'hidden'
    },
    title: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '0',
      color: 'black',
      paddingTop: '0.8rem',
      fontSize: '1.6rem',
      position: 'relative'
    },
    emoji: {
      marginLeft: '0.8rem',
      fontSize: '2.4rem'
    },
    miniColor: {
      height: '25%',
      width: '20%',
      display: 'inline-block',
      margin: '0 auto',
      position: 'relative',
      marginBottom: '-.35rem'
    },
    deleteIcon: {
      color: 'white',
      backgroundColor: '#eb3d30',
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: 10,
      opacity: 0,
      transition: 'all .3s ease-in-out'
    }
  });

export default styles;
