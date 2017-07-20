import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import ColTitle from '../ColTitle';
import Line from '../Line';
import Row from '../Row';

const Col = (props) => {
  const { id, rows, title, showInput, changeTitle, handleDel } = props;
  const handleClick = (e) => {
    handleDel(id);
  };

  return (
    <div className="grid_col">
      <Button title="remove column" onClick={handleClick} />
      <ColTitle id={id} title={title} showInput={showInput} onBlur={changeTitle} />
      {rows.map((r) => (
        <Line key={r.id} colId={id} rowId={r.id} text={r.text} {...props} />
      ))}
      <Row {...props} />
    </div>
  );
};

Col.propTypes = {
  id: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  showInput: PropTypes.bool.isRequired,
  changeTitle: PropTypes.func.isRequired,
  handleDel: PropTypes.func.isRequired
};

export default Col;
