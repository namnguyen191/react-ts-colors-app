import React, { Component } from 'react';
import { Color } from './Interfaces';
import './ColorBox.css';

interface ColorBoxProps {
  color: Color;
}

class ColorBox extends Component<ColorBoxProps> {
  render() {
    const { name, color } = this.props.color;

    return (
      <div className="ColorBox" style={{ background: color }}>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">More</span>
      </div>
    );
  }
}

export default ColorBox;
