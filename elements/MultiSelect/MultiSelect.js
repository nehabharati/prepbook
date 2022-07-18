import Select from 'react-select';

export const MultiSelect = ({ value, multi, handleChange, options }) => {
  console.log(multi, value, options);

  const selectOptions = multi
    ? [{ label: 'Select All', value: 'all' }, ...options]
    : options;
  console.log(selectOptions);
  return (
    <Select
      name="example"
      options={options}
      isMulti={multi}
      value={value ? value : null}
      onChange={(selected) => {
        console.log('selected', selected);
        multi &&
        selected.length &&
        selected.find((option) => option.value === 'all')
          ? handleChange(options.slice(1))
          : !multi
          ? handleChange((selected && selected.value) || null)
          : handleChange(selected);
      }}
    />
    // <Select
    //   name="example"
    //   options={selectOptions}
    //   multi={multi}
    //   value={value ? value : null}
    //   onChange={(selected) => {
    //     console.log(selected);
    //     multi &&
    //     selected.length &&
    //     selected.find((option) => option.value === 'all')
    //       ? handleChange(selectOptions.slice(1))
    //       : !multi
    //       ? handleChange((selected && selected.value) || null)
    //       : handleChange(selected);
    //   }}
    // />
  );
};
