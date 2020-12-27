import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';
import React, { Component } from 'react';
import { IconButton, MenuItem, Select, Snackbar } from '@material-ui/core';
import { ChangeEvent } from 'react';
import CloseIcon from '@material-ui/icons/Close';

import './Navbar.css';

type NavbarProps = {
  level: number;
  changeLevel: (newLevel: number) => void;
  handleChange: (val: 'hex' | 'rgb' | 'rgba') => void;
};

type NavbarStates = {
  format: 'hex' | 'rgb' | 'rgba';
  open: boolean;
};

class Navbar extends Component<NavbarProps, NavbarStates> {
  constructor(props: NavbarProps) {
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
    const { level, changeLevel } = this.props;
    const { format } = this.state;

    return (
      <header className="Navbar">
        <div className="logo">
          <a href="/">reactcolorpicker</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="select-container">
          <Select value={format} onChange={this.handleFormatChange}>
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
            <span id="message-id">
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

export default Navbar;
