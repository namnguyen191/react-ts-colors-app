import chroma from 'chroma-js';
import { GeneratedPaletteObj, PaletteObj } from '../Types/DataModels.type';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export function generatePalette(starterPalette: PaletteObj) {
  let newPalette: GeneratedPaletteObj = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {}
  };

  for (let level of levels) {
    newPalette.colors[level] = [];
  }

  for (let color of starterPalette.colors) {
    let scale = generateScale(color.color, 10).reverse();
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
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

  return newPalette;
}

function getRange(hexColor: string) {
  const end = '#fff';
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}

function generateScale(hexColor: string, numberOfColors: number) {
  return chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors);
}
