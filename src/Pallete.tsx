import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { ColorLevel } from './colorHelper';
import './Pallete.css';

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
};

class Pallete extends Component<PalleteProps, PalleteStates> {
  constructor(props: PalleteProps) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(newLevel: number) {
    this.setState({ level: newLevel });
  }

  render() {
    const { colors } = this.props.pallete;
    const { level } = this.state;

    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        color={{
          name: color.name,
          color: color.hex
        }}
      />
    ));

    return (
      <div className="Pallete">
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changeLevel}
          />
        </div>
        {/* Navbar goes here */}
        <div className="Pallete-colors">{colorBoxes}</div>
        {/* Footer section */}
      </div>
    );
  }
}

export default Pallete;
