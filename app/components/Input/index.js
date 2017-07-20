import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ value, onChange, onKeyPress }) => (
  <input
    type="text"
    className="input_text"
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress}
  />
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired
};

export default Input;
