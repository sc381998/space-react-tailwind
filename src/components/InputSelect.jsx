import React from 'react';
import { capitalize } from '../utils';
import PropTypes from 'prop-types';

function InputSelect({ options, id, value, onChange }) {
  options = options.map((ele) => ele[id]);
  options = [...new Set(options)];
  return (
    <select
      id={id}
      name={id}
      onChange={onChange}
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
    >
      <option key='blankKey' hidden value>{`Select ${
        id !== 'original_launch' ? id : 'orginal launch'
      }`}</option>
      {options &&
        options.length &&
        options.map((ele, index) => {
          let updatedValue = ele;
          if (id === 'original_launch') {
            updatedValue = new Date(updatedValue);
            updatedValue = updatedValue.toDateString();
          }
          return (
            <option value={value} key={index}>
              {capitalize(updatedValue)}
            </option>
          );
        })}
    </select>
  );
}

InputSelect.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.number,
};

export default InputSelect;
