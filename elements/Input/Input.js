import React from 'react';
import classNames from 'classnames';

export const Input = ({ customInput, setCustomInput }) => {
  return (
    <textarea
      rows="5"
      value={customInput}
      onChange={(e) => setCustomInput(e.target.value)}
      placeholder={`Enter Custom input here`}
      className={classNames(
        'focus:outline-none w-full border-4 border-black z-10 px-4 py-2 transition duration-200 bg-white'
      )}
    ></textarea>
  );
};
