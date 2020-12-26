import chroma, { hex } from 'chroma-js';
import { PalleteObj } from './Interfaces';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

type ColorLevel = {
  name: string;
  id: string;
  hex: string;
  rgb: string;
  rgba: string;
};

function generatePallete(starterPallete: PalleteObj) {
  let newPallete: {
    palleteName: string;
    id: string;
    emoji: string;
    colors: {
      [key: number]: ColorLevel[];
    };
  } = {
    palleteName: starterPallete.paletteName,
    id: starterPallete.id,
    emoji: starterPallete.emoji,
    colors: {}
  };

  for (let level of levels) {
    newPallete.colors[level] = [];
  }

  for (let color of starterPallete.colors) {
    let scale = generateScale(color.color, 10).reverse();
    for (let i in scale) {
      newPallete.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, '-'),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace('rgb', 'rgba')
          .replace(')', ', 1.0)')
      });
    }
  }

  return newPallete;
}

function getRange(hexColor: string) {
  const end = '#fff';
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}

function generateScale(hexColor: string, numberOfColors: number) {
  return chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors);
}
