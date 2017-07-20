import React from 'react';
import PropTypes from 'prop-types';
import Col from './Col';

const Grid = ({ cols, handleDel, addRow, delRow, changeTitle }) => (
  // const handleClick = (e) => {
  //   handleDel(id);
  // };

  <div className="grid">
    {cols.map((c) => (
      <Col
        key={c.id}
        title={c.title}
        rows={c.rows}
        id={c.id}
        handleDel={handleDel}
        addRow={addRow}
        delRow={delRow}
        changeTitle={changeTitle}
        showInput={c.showInput}
      />
    ))}
    <div className="plus">
      <button className="btn_plus" onClick={this.handleAdd}>+</button>
    </div>
  </div>
);

Grid.propTypes = {
  cols: PropTypes.array.isRequired,
  handleDel: PropTypes.func.isRequired,
  addRow: PropTypes.func.isRequired,
  delRow: PropTypes.func.isRequired,
  changeTitle: PropTypes.func.isRequired
};

export default Grid;
