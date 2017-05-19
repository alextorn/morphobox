import React from 'react';
import PropTypes from 'prop-types';

function Row(props) {
  const { text, rowId, colId } = props;
  const handleClick = (e) => {
    props.delRow(rowId, colId);
  };
  return (
    <div className="grid_row grid_text">
      {text}
      <button className="btn_del" onClick={handleClick}>-</button>
    </div>
  );
}

Row.propTypes = {
  text: PropTypes.string.isRequired,
  rowId: PropTypes.string.isRequired,
  colId: PropTypes.string.isRequired,
  delRow: PropTypes.func.isRequired
};

export default Row;
