import { DropdownItem } from '../../items/dropdown';
import { headerLevelData } from '../../items/dropdown/dropdown-block-types/header-level/data';
import { headerLevelType } from '../../items/dropdown/dropdown-block-types/header-level/type';
import { listData } from '../../items/dropdown/dropdown-block-types/list/data';
import { listType } from '../../items/dropdown/dropdown-block-types/list/type';
import { blockTypeFn } from '../../fns-utils';

const ToolbarBlockStyles = ({ editorState, onToggleButtonGroup }) => {
  const tag = 'blocks';
  const blockType = blockTypeFn(editorState);
  return (
    <div id="toolbar-block-styles">
      <DropdownItem
        title="Header levels"
        tag={tag}
        options={headerLevelData.map(data => ({
          label: data.label,
          value: data.style,
          active: blockType === data.style
        }))}
        type={headerLevelType}
        onToggleButtonGroup={onToggleButtonGroup}
      />
      <DropdownItem
        title="Lists"
        tag={tag}
        options={listData.map(data => ({
          label: data.label,
          value: data.style,
          active: blockType === data.style
        }))}
        type={listType}
        onToggleButtonGroup={onToggleButtonGroup}
      />
    </div>
  );
};

ToolbarBlockStyles.displayName = 'ToolbarBlockStyles';
export { ToolbarBlockStyles };
