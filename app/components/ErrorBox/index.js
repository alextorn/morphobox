import React from 'react';
import PropTypes from 'prop-types';

const ErrorBox = ({ error }) => (
  <div className="error">
    <h1>We have a problem!</h1>
    <pre>{error.message}</pre>
  </div>
);

ErrorBox.propTypes = {
  error: PropTypes.object.isRequired
};

export default ErrorBox;
