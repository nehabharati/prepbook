import Select from 'react-select';

export const MultiSelect = ({
  value,
  multi,
  handleChange,
  options,
  errorMessage,
}) => {
  return (
    <>
      <Select
        name="example"
        options={options}
        isMulti={multi}
        defaultValue={value}
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
      <div className="text-red-500 text-xs">{errorMessage}</div>
    </>
  );
};
