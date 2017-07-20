import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

function Line({ text, rowId, colId, delRow }) {
  const handleClick = (e) => {
    delRow(rowId, colId);
  };

  return (
    <div className="grid_row grid_text">
      {text}
      <Button title="remove row" className="small" onClick={handleClick} />
    </div>
  );
}

Line.propTypes = {
  text: PropTypes.string.isRequired,
  rowId: PropTypes.string.isRequired,
  colId: PropTypes.string.isRequired,
  delRow: PropTypes.func.isRequired
};

export default Line;
