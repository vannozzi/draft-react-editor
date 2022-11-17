import React, { useState} from 'react';
import cn from 'classnames';
import { colorPaletteType } from './dropdown-inline-styles/color-palette/type';

const DropdownItem = ({ tag, type, title, options, onToggleButtonGroup }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onToggleGroupInlineStyles = newValue => onToggleButtonGroup(newValue, type);
  const onToggleGroupBlockStyles = newValue => onToggleButtonGroup(newValue);

  const onToggleButton = newValue => {
    if (tag === 'inlines') {
      onToggleGroupInlineStyles(newValue);
    } else if (tag === 'blocks') {
      onToggleGroupBlockStyles(newValue);
    }
  };

  return (
    <>
      <span className="dropdown">
        <button
          className="btn btn-light dropdown-toggle rounded-0"
          type="button"
          id={`dropdownItem${type}`}
          onClick={() => setIsExpanded(!isExpanded)}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded={isExpanded}
          style={{width: "160px"}}
        >
          {title}
        </button>
        <div
          className={cn('dropdown-menu rounded-0 p-0', { show: isExpanded })}
          aria-labelledby={`dropdownItem${type}`}
          style={{height: `${32 * options.length}px`, top: '30px'}}
        >
          {options.map(option => (
            <button
              key={option.value}
              type="button"
              className={`dropdown-item btn btn-light rounded-0 d-flex ${
                option.active ? 'font-weight-bold' : ''
              }`}
              onClick={() => onToggleButton(option.value)}
            >
              {option.label}
              {type === colorPaletteType ? (
                <span
                  className={`snf-bg-color-${option.label} position-relative`}
                  style={{ height: '10px', width: '10px', top: '8px', left: '10px' }}
                />
              ) : null}
            </button>
          ))}
        </div>
      </span>
    </>
  );
};

DropdownItem.displayName = 'DropdownItem';
export { DropdownItem };
