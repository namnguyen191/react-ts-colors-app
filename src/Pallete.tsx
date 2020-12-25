import React, { Component } from 'react';
import ColorBox from './ColorBox';
import { PalleteObj } from './Interfaces';
import './Pallete.css';

interface PalleteProps {
  pallete: PalleteObj;
}

class Pallete extends Component<PalleteProps> {
  render() {
    const colorBoxes = this.props.pallete.colors.map((color) => (
      <ColorBox color={color} />
    ));

    return (
      <div className="Pallete">
        {/* Navbar goes here */}
        <div className="Pallete-colors">{colorBoxes}</div>
        {/* Footer section */}
      </div>
    );
  }
}

export default Pallete;
