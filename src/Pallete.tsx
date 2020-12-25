import React, { Component } from 'react';
import { PalleteObj } from './Interfaces';

interface PalleteProps {
  pallete: PalleteObj;
}

class Pallete extends Component<PalleteProps> {
  render() {
    return (
      <div className="Pallete">
        {/* Navbar goes here */}
        <div className="Pallete-colors">{/* Bunch of color boxes */}</div>
        {/* Footer section */}
      </div>
    );
  }
}

export default Pallete;
