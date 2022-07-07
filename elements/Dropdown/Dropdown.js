import React from 'react';
import Select from 'react-select';
import { customStyles } from '../../constants/customStyles';
import { languageOptions } from '../../constants/languageOptions';
import monacoThemes from 'monaco-themes/themes/themelist';

export const Dropdown = ({
  onSelectChange,
  handleThemeChange,
  theme,
  type,
}) => {
  console.log(type);
  return (
    <Select
      placeholder={type === 'Language' ? `Filter By Category` : `Select Theme`}
      options={
        type === 'Language'
          ? languageOptions
          : Object.entries(monacoThemes).map(([themeId, themeName]) => ({
              label: themeName,
              value: themeId,
              key: themeId,
            }))
      }
      styles={customStyles}
      defaultValue={type === 'Language' ? languageOptions[0] : theme}
      onChange={
        type === 'Language'
          ? (selectedOption) => onSelectChange(selectedOption)
          : handleThemeChange
      }
    />
  );
};
