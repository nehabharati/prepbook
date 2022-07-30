import React from 'react';
import Select from 'react-select';

export const Dropdown = ({
  placeholder,
  options,
  value,
  onChange,
  styles,
  errorMessage,
}) => {
  return (
    <>
      <Select
        placeholder={placeholder}
        options={options}
        styles={styles}
        className="rounded-lg"
        defaultValue={options.filter((option) => option.label === value)}
        onChange={onChange}
      />
      <div className="text-red-500 text-xs">{errorMessage}</div>
    </>
  );
};
