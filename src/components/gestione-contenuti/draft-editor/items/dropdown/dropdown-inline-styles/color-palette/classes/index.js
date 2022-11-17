import { colorPaletteData } from '../data';

export const colorPaletteClasses = colorPaletteData.reduce((acc, element) => {
  const newAcc = {
    ...acc,
    [`CUSTOM_COLOR_PALETTE_${element.value}`]: {
      color: element.value
    }
  };
  return newAcc;
}, {});
