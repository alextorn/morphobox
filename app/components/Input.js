import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ addRow, id }) => {
  let input;
  return (
    <div className="grid_row">
      <button
        className="btn btn_sml"
        onClick={() => { addRow(input.value, id); input.value = ''; }}
      >+</button>
      <input
        className="input_text"
        ref={(node) => {
          input = node;
        }}
      />
    </div>
  );
};

Input.propTypes = {
  addRow: PropTypes.any.isRequired,
  id: PropTypes.any.isRequired
};

export default Input;
