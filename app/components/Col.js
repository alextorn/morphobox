import React, { PropTypes } from 'react';
import ColTitle from './ColTitle';
import Row from './Row';
import Input from './Input';

const Col = (props) => {
  const { rows, title } = props;
  const handleClick = (e) => {
    props.handleDel(props.id);
  };

  return (
    <div className="grid_col">
      <button className="btn_del" onClick={handleClick}>-</button>
      <ColTitle title={title} />
      {rows.map((r) => (
        <Row key={r.id} className="grid_row" text={r.text} />
      ))}
      <Input {...props} />
    </div>
  );
};

Col.propTypes = {
  rows: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default Col;
