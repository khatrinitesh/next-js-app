import React, { useState } from 'react'

const CustomApp = () => {
    const { value, onChange } = UseRadioButtons('option1');

  return (
    <div className="p-4">
      <RadioButton value="option1" label="Option 1" checked={value === 'option1'} onChange={onChange} />
      <RadioButton value="option2" label="Option 2" checked={value === 'option2'} onChange={onChange} />
      <RadioButton value="option3" label="Option 3" checked={value === 'option3'} onChange={onChange} />
    </div>
  );
}

export default CustomApp


// custom hook for managing radio button state
function UseRadioButtons(defaultValue) {
    const [value, setValue] = React.useState(defaultValue);
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return {
      value,
      onChange: handleChange,
    };
  }

// RADIO COMPONENT
function RadioButton({ value, label, checked, onChange }) {
    return (
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio text-indigo-600 h-5 w-5"
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <span className="ml-2">{label}</span>
      </label>
    );
  }
