import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Color } from './Interfaces';
import './ColorBox.css';

interface ColorBoxProps {
  color: Color;
}

type ColorBoxStates = {
  copied: boolean;
};

class ColorBox extends Component<ColorBoxProps, ColorBoxStates> {
  constructor(props: ColorBoxProps) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const { name, color } = this.props.color;
    const { copied } = this.state;

    return (
      <CopyToClipboard text={color} onCopy={this.changeCopyState}>
        <div className="ColorBox" style={{ background: color }}>
          <div
            style={{ background: color }}
            className={`copy-overlay ${copied && 'show'}`}
          />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>copied!</h1>
            <p>{color}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <span className="see-more">More</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
