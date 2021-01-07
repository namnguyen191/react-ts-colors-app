import { makeStyles, Theme } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    '@global': {
      '.page-enter': {
        opacity: 0
      },
      '.page-enter-active': {
        opacity: 1,
        transition: 'opacity 300ms ease-in'
      },
      '.page-exit': {
        opacity: 1
      },
      '.page-exit-active': {
        opacity: 0,
        transition: 'opacity 300ms ease-in'
      }
    }
  })
);

export default useStyles;
