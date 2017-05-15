import React from 'react';
import PropTypes from 'prop-types';

function Row(props) {
  const { text } = props;
  return (
    <div className="grid_row grid_text">
      {text}
      <button className="btn_del">-</button>
    </div>
  );
}

Row.propTypes = {
  text: PropTypes.string.isRequired
};

export default Row;
