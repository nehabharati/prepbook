export const CustomRadio = ({ label, value, onChange }) => {
  console.log(value);
  return (
    <div>
      <span>{label}</span>
      <div className="flex items-center">
        <label className="mr-4 flex items-center">
          <input
            className="mr-1"
            type="radio"
            value={'Yes'}
            checked={value === 'Yes' || value === true}
            onChange={onChange}
          />
          Yes
        </label>
        <label className="flex items-center">
          <input
            className="mr-1"
            type="radio"
            value={'No'}
            checked={value === 'No' || value === false}
            onChange={onChange}
          />
          No
        </label>
      </div>
    </div>
  );
};
