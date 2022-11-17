import { ButtonItem } from '../../items/button';
import { DropdownItem } from '../../items/dropdown';
import { styles } from '../../custom-styles';
import { fontStyleItalicData } from '../../items/button/button-inline-styles/font-style-italic/data';
import { fontWeightBoldData } from '../../items/button/button-inline-styles/font-weight-bold/data';
import { fontSizeData } from '../../items/dropdown/dropdown-inline-styles/font-size/data';
import { fontSizeType } from '../../items/dropdown/dropdown-inline-styles/font-size/type';
import { colorPaletteData } from '../../items/dropdown/dropdown-inline-styles/color-palette/data';
import { colorPaletteType } from '../../items/dropdown/dropdown-inline-styles/color-palette/type';
import { currentStyleFn } from '../../fns-utils';

const ToolbarInlineStyles = ({ editorState, onToggleButton, onToggleButtonGroup }) => {
  const tag = 'inlines';
  const currentStyle = currentStyleFn(editorState);
  return (
    <div id="toolbar-inline-styles">
        <ButtonItem
          key={fontStyleItalicData.value}
          value={fontStyleItalicData.value}
          active={currentStyle.has(fontStyleItalicData.value)}
          label={fontStyleItalicData.label}
          onToggleButton={onToggleButton}
        />
        <ButtonItem
          key={fontWeightBoldData.value}
          value={fontWeightBoldData.value}
          active={currentStyle.has(fontWeightBoldData.value)}
          label={fontWeightBoldData.label}
          onToggleButton={onToggleButton}
        />
      <DropdownItem
        title="Font sizes"
        tag={tag}
        options={fontSizeData.map(data => ({
          label: data.label,
          value: data.value,
          active: styles.fontSize.current(editorState) === data.value || (data.label === '16' && !styles.fontSize.current(editorState))
        }))}
        type={fontSizeType}
        onToggleButtonGroup={onToggleButtonGroup}
      />
      <DropdownItem
        title="Colors palette"
        tag={tag}
        options={colorPaletteData.map(data => ({
          label: data.label,
          value: data.value,
          active: styles.color.current(editorState) === data.value || (data.label === 'black' && !styles.color.current(editorState))
        }))}
        type={colorPaletteType}
        onToggleButtonGroup={onToggleButtonGroup}
      />
    </div>
  );
};

ToolbarInlineStyles.displayName = 'ToolbarInlineStyles';
export { ToolbarInlineStyles };
