import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, className, onClick }) => (
  <button className={`btn_del ${(className || '')}`} title={title} onClick={onClick}>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
      <line x1="1.9" y1="1.9" x2="23.1" y2="23.1" />
      <line x1="23.1" y1="1.9" x2="1.9" y2="23.1" />
    </svg>
  </button>
);

Button.defaultProps = {
  className: ''
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default Button;
