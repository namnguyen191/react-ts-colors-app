import { createStyles, makeStyles, Theme } from '@material-ui/core';
import chroma from 'chroma-js';
import { sizes } from '../GlobalCssConst';
import { DraggableColorBoxProps } from './DraggableColorBox';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '20%',
      height: '25%',
      margin: '0 auto',
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      marginBottom: 0,
      '&:hover $deleteIcon': {
        color: 'white',
        transform: 'scale(1.5)',
        [sizes.down('md')]: {
          transform: 'scale(1)'
        }
      },
      [sizes.down('lg')]: {
        width: '25%',
        height: '20%'
      },
      [sizes.down('md')]: {
        width: '50%',
        height: '10%'
      },
      [sizes.down('sm')]: {
        width: '100%',
        height: '5%'
      }
    },
    boxContent: {
      fontSize: '1.2rem',
      position: 'absolute',
      width: '100%',
      left: 0,
      bottom: 0,
      padding: '1rem',
      color: (props: DraggableColorBoxProps) =>
        chroma(props.color.color).luminance() <= 0.08
          ? 'rgba(255,255,255,0.8)'
          : 'rgba(0,0,0,0.6)',
      letterSpacing: '0.1rem',
      textTransform: 'uppercase',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      [sizes.down('md')]: {
        padding: 0
      }
    },
    deleteIcon: {
      transition: 'all 0.3s ease-in-out',
      [sizes.down('md')]: {
        marginRight: '1rem'
      }
    }
  })
);

export default useStyles;
