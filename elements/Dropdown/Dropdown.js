import React from 'react';
import Select from 'react-select';

export const Dropdown = ({
  placeholder,
  options,
  defaultValue,
  onChange,
  styles,
}) => {
  return (
    <Select
      placeholder={placeholder}
      options={options}
      styles={styles}
      className="rounded-lg"
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};
