import React from 'react';
import Select from 'react-select';

export const Dropdown = ({ placeholder, options, value, onChange, styles }) => {
  console.log(
    value,
    options.filter((option) => option.label === value)
  );
  return (
    <Select
      placeholder={placeholder}
      options={options}
      styles={styles}
      className="rounded-lg"
      // value={value}
      defaultValue={options.filter((option) => option.label === value)}
      onChange={onChange}
    />
  );
};
