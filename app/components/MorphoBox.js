import React from 'react';
import uuidV4 from 'uuid/v4';
import Col from './Col';
import data from '../data';

class MorphoBox extends React.Component {
  state = {
    cols: [],
    colNumber: '',
    rand: []
  }

  componentWillMount() {
    this.setState({
      cols: data,
      colNumber: data.length
    });
  }

  getRandomRow = (rows) => {
    const rowItem = rows[Math.floor(Math.random() * rows.length)];
    return rowItem.text;
  }

  handleGen = () => {
    const randArr = [];
    const newArr = this.state.cols.filter((i) => i.rows.length !== 0);
    if (newArr.length) {
      newArr.map((i) => randArr.push(this.getRandomRow(i.rows)));
    }
    this.setState({
      rand: randArr.join(' ')
    });
  }

  handleAdd = () => {
    const col = {
      id: uuidV4(),
      title: `Column ${this.state.colNumber + 1}`,
      rows: []
    };

    this.state.cols.push(col);

    this.setState({
      cols: this.state.cols,
      colNumber: this.state.cols.length
    });
  }

  handleDel = (colId) => {
    const newArr = this.state.cols.filter((i) => colId !== i.id);
    this.setState({
      cols: newArr,
      colNumber: newArr.length
    });
  }

  addRow = (val, colId) => {
    if (val) {
      const row = { id: uuidV4(), text: val };
      const newArr = this.state.cols.filter((i) => {
        if (colId === i.id) {
          i.rows.push(row);
        }
        return i;
      });
      this.setState({
        cols: newArr
      });
    }
  }

  render() {
    return (
      <div>
        <div className="grid">
          {this.state.cols.map((c) => (
            <Col
              key={c.id}
              title={c.title}
              rows={c.rows}
              id={c.id}
              handleDel={this.handleDel}
              addRow={this.addRow}
            />
          ))}
          <div className="plus">
            <button className="btn_plus" onClick={this.handleAdd}>+</button>
          </div>
        </div>
        <div className="grid_btn">
          <button className="btn" onClick={this.handleGen}>Generate</button>
        </div>
        <div className="grid_result">Result: {this.state.rand}</div>
      </div>
    );
  }
}

export default MorphoBox;
