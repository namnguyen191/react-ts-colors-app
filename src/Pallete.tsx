import React, { Component } from 'react';
import ColorBox from './ColorBox';
import { ColorLevel } from './colorHelper';
import './Pallete.css';
import Navbar from './Navbar';

interface PalleteProps {
  pallete: {
    palleteName: string;
    id: string;
    emoji: string;
    colors: {
      [key: number]: ColorLevel[];
    };
  };
}

type PalleteStates = {
  level: number;
  format: 'hex' | 'rgb' | 'rgba';
};

class Pallete extends Component<PalleteProps, PalleteStates> {
  constructor(props: PalleteProps) {
    super(props);
    this.state = { level: 500, format: 'hex' };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(newLevel: number) {
    this.setState({ level: newLevel });
  }

  changeFormat(val: 'hex' | 'rgb' | 'rgba') {
    this.setState({ format: val });
  }

  render() {
    const { colors } = this.props.pallete;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        color={{
          name: color.name,
          color: color[format]
        }}
      />
    ));

    return (
      <div className="Pallete">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        {/* Navbar goes here */}
        <div className="Pallete-colors">{colorBoxes}</div>
        {/* Footer section */}
      </div>
    );
  }
}

export default Pallete;
