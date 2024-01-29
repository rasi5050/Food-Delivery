import React, { useState } from 'react';

const ToggleSwitch = ({ label, checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
          onChange();
        }}
      />
      <span className="toggle-switch-label">{label}</span>
    </div>
  );
};

export default ToggleSwitch;