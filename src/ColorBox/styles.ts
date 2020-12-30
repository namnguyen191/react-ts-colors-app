import { createStyles, Theme } from '@material-ui/core';
import { ColorBoxProps } from '../Types/ComponentProps.type';
import chroma from 'chroma-js';

const styles = (theme: Theme) =>
  createStyles({
    ColorBox: {
      width: '20%',
      height: (props: ColorBoxProps) => (props.showLink ? '25%' : '50%'),
      margin: '0 auto',
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      marginBottom: '-0.35rem',
      '&:hover': {
        '& $copyButton': {
          opacity: 1
        }
      }
    },
    copyText: {
      color: (props: ColorBoxProps) =>
        chroma(props.color.color).luminance() >= 0.7 ? 'black' : 'white'
    },
    colorName: {
      color: (props: ColorBoxProps) =>
        chroma(props.color.color).luminance() <= 0.08 ? 'white' : 'black'
    },
    seeMore: {
      color: (props: ColorBoxProps) =>
        chroma(props.color.color).luminance() >= 0.7
          ? 'rgba(0,0,0,0.6)'
          : 'white',
      fontSize: '1.6rem',
      background: 'rgba(255, 255, 255, 0.3)',
      position: 'absolute',
      border: 'none',
      right: '0',
      bottom: '0',
      width: '6rem',
      height: '3rem',
      textAlign: 'center',
      lineHeight: '3rem',
      textTransform: 'uppercase'
    },
    copyButton: {
      color: (props: ColorBoxProps) =>
        chroma(props.color.color).luminance() >= 0.7
          ? 'rgba(0,0,0,0.6)'
          : 'white',
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
      textDecoration: 'none',
      opacity: 0
    },
    boxContent: {
      fontSize: '1.2rem',
      position: 'absolute',
      width: '100%',
      left: 0,
      bottom: 0,
      padding: '1rem',
      color: 'black',
      letterSpacing: '0.1rem',
      textTransform: 'uppercase'
    },
    copyOverlay: {
      opacity: 0,
      zIndex: 0,
      width: '100%',
      height: '100%',
      transition: 'transform 0.6s ease-in-out',
      transform: 'scale(0.1)'
    },
    showcopyOverlay: {
      opacity: 1,
      transform: 'scale(50)',
      zIndex: 10,
      position: 'absolute'
    },
    copyMessage: {
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      fontSize: '6.4rem',
      transform: 'scale(0.1)',
      opacity: 0,
      color: 'white',
      '& h1': {
        fontWeight: 400,
        textShadow: '0.1rem 0.2rem black',
        background: 'rgba(255, 255, 255, 0.2)',
        width: '100%',
        textAlign: 'center',
        marginBottom: 0,
        padding: '1.6rem',
        textTransform: 'uppercase'
      },
      '& p': {
        fontSize: '3.2rem',
        fontWeight: 100
      }
    },
    showCopyMessage: {
      opacity: 1,
      transform: 'scale(1)',
      zIndex: 25,
      transition: 'all 0.4s ease-in-out',
      transitionDelay: '0.3s'
    }
  });

export default styles;
