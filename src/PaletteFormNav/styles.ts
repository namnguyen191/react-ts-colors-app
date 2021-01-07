import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { DRAWER_WIDTH } from '../GlobalCssConst';
import { sizes } from '../GlobalCssConst';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '6.4rem'
    },
    appBarShift: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    hide: {
      display: 'none'
    },
    navBtns: {
      marginRight: '1.6rem',
      '& a': {
        textDecoration: 'none'
      },
      [sizes.down('xs')]: {
        marginRight: '0.8rem'
      }
    },
    button: {
      margin: '0 0.8rem',
      [sizes.down('xs')]: {
        margin: 0
      },
      '& a': {
        textDecoration: 'none'
      }
    }
  })
);

export default useStyles;
