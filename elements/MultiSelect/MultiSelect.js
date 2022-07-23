import Select from 'react-select';

export const MultiSelect = ({ value, multi, handleChange, options }) => {
  // const selectOptions = multi
  //   ? [{ label: 'Select All', value: 'all' }, ...options]
  //   : options;
  return (
    <Select
      name="example"
      options={options}
      isMulti={multi}
      defaultValue={options.filter((option) => option.label === value)}
      onChange={(selected) => {
        multi &&
        selected.length &&
        selected.find((option) => option.value === 'all')
          ? handleChange(options.slice(1))
          : !multi
          ? handleChange((selected && selected.value) || null)
          : handleChange(selected);
      }}
    />
  );
};
