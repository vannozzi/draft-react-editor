import React from 'react';

const ButtonItem = ({ value, active, onToggleButton, label }) => {
  return (
    <button
      type="button"
      className={`btn btn-light rounded-0 text-dark ${
        active ? `font-weight-bold` : null
      }`}
      onClick={() => onToggleButton(value)}
    >
      {label}
    </button>
  );
};

ButtonItem.displayName = 'ButtonItem';
export { ButtonItem };
