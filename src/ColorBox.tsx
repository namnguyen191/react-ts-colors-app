import React, { Component } from 'react';
import { Color } from './Interfaces';
import './ColorBox.css';

interface ColorBoxProps {
  color: Color;
}

class ColorBox extends Component<ColorBoxProps> {
  render() {
    return (
      <div className="ColorBox" style={{ background: this.props.color.color }}>
        <span>{this.props.color.name}</span>
        <span>MORE</span>
      </div>
    );
  }
}

export default ColorBox;
