import createStyles from 'draft-js-custom-styles';
import { fontSizeClasses } from '../items/dropdown/dropdown-inline-styles/font-size/classes';
import { colorPaletteClasses } from '../items/dropdown/dropdown-inline-styles/color-palette/classes';
import { fontStyleItalicClass } from '../items/button/button-inline-styles/font-style-italic/class';
import { fontWeightBoldClass } from '../items/button/button-inline-styles/font-weight-bold/class';

export const customStyleMap = {
  ...fontStyleItalicClass,
  ...fontWeightBoldClass,
  ...fontSizeClasses,
  ...colorPaletteClasses
};

const { styles, customStyleFn, exporter } = createStyles(
  ['font-size', 'color'],
  'CUSTOM_',
  customStyleMap
);
export { styles, customStyleFn, exporter };
