import React from 'react';
import PropTypes from 'prop-types';
import ColTitle from './ColTitle';
import Row from './Row';
import Input from './Input';

const Col = (props) => {
  const { id, rows, title, showInput, changeTitle } = props;
  const handleClick = (e) => {
    props.handleDel(id);
  };

  return (
    <div className="grid_col">
      <button className="btn_del" onClick={handleClick}>-</button>
      <ColTitle id={id} title={title} showInput={showInput} onBlur={changeTitle} />
      {rows.map((r) => (
        <Row key={r.id} colId={id} rowId={r.id} text={r.text} {...props} />
      ))}
      <Input {...props} />
    </div>
  );
};

Col.propTypes = {
  id: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  showInput: PropTypes.bool.isRequired,
  changeTitle: PropTypes.func.isRequired
};

export default Col;
