import { fontSizeData } from '../data';

export const fontSizeClasses = fontSizeData.reduce((acc, element) => {
  const newAcc = {
    ...acc,
    [`CUSTOM_FONT_SIZE_${element.value}`]: {
      fontSize: element.value
    }
  };
  return newAcc;
}, {});
