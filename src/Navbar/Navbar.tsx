import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';
import { Component } from 'react';
import {
  IconButton,
  MenuItem,
  Select,
  Snackbar,
  WithStyles
} from '@material-ui/core';
import { ChangeEvent } from 'react';
import CloseIcon from '@material-ui/icons/Close';

import { Link } from 'react-router-dom';
import { NavbarProps } from '../Types/ComponentProps.type';
import { NavbarStates } from '../Types/ComponentStates.type';
import { withStyles } from '@material-ui/styles';
import styles from './styles';

type Props = NavbarProps & WithStyles<typeof styles>;

class Navbar extends Component<Props, NavbarStates> {
  constructor(props: Props) {
    super(props);
    this.state = { format: 'hex', open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleFormatChange(
    e: ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) {
    if (
      e.target.value === 'hex' ||
      e.target.value === 'rgb' ||
      e.target.value === 'rgba'
    )
      this.setState({ format: e.target.value, open: true });
    if (
      e.target.value === 'hex' ||
      e.target.value === 'rgb' ||
      e.target.value === 'rgba'
    )
      this.props.handleChange(e.target.value);
  }

  closeSnackbar() {
    this.setState({ open: false });
  }

  render() {
    const { level, changeLevel, classes } = this.props;
    const { format } = this.state;

    return (
      <header className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to="/">reactcolorpicker</Link>
        </div>
        {level && (
          <div className="slider-container">
            <span style={{ fontSize: '1.6rem' }}>Level: {level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}
        <div className={classes.selectContainer}>
          <Select
            value={format}
            onChange={this.handleFormatChange}
            style={{ fontSize: '2rem' }}
          >
            <MenuItem value="hex">HEX - #fffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={this.state.open}
          autoHideDuration={3000}
          message={
            <span className={classes.messageId}>
              Format Changed To {format.toUpperCase()}!
            </span>
          }
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          ]}
          onClose={this.closeSnackbar}
        />
      </header>
    );
  }
}

export default withStyles(styles)(Navbar);
