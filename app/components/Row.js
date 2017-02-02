import React, { PropTypes } from 'react';

function Row(props) {
  const { text } = props;
  return (
    <div className="grid_row">
      {text}
    </div>
  );
}

Row.propTypes = {
  text: PropTypes.string.isRequired
};

export default Row;
