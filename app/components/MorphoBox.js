import React from 'react';
import uuidV4 from 'uuid/v4';
import Col from './Col';
import data from '../data';

class MorphoBox extends React.Component {
  state = {
    targetTitle: '',
    cols: [],
    colNumber: '',
    rand: [],
    isDisabled: true,
    canGenerate: false
  }

  componentWillMount() {
    this.setState({
      targetTitle: data.title,
      cols: data.cols,
      colNumber: data.cols.length
    });
  }

  getRandomRow = (rows) => {
    const rowItem = rows[Math.floor(Math.random() * rows.length)];
    return rowItem.text;
  }

  checkCanGenetare = (colId) => {
    const newArr = this.state.cols.filter((i) => i.rows.length !== 0);
    if (newArr.length > 1) {
      this.setState({
        canGenerate: true
      });
    } else {
      this.setState({
        canGenerate: false
      });
    }
  }

  handleGen = () => {
    const randArr = [];
    const newArr = this.state.cols.filter((i) => i.rows.length !== 0);
    if (newArr.length > 1) {
      newArr.map((i) => randArr.push(this.getRandomRow(i.rows)));
    }
    this.setState({
      rand: randArr.join(' ')
    });
  }

  handleAdd = () => {
    const col = {
      id: uuidV4(),
      title: 'Axis title',
      showInput: false,
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

  addRow = (value, colId) => {
    if (value) {
      const row = { id: uuidV4(), text: value };
      const newArr = this.state.cols.filter((i) => {
        if (colId === i.id) {
          i.rows.push(row);
        }
        return i;
      });
      this.setState({
        cols: newArr
      }, this.checkCanGenetare(colId));
    }
  }

  delRow = (rowId, colId) => {
    const newArr = this.state.cols.map((c) =>
      (c.id === colId ? { ...c, rows: c.rows.filter((r) => r.id !== rowId) } : c));
    this.setState({
      cols: newArr
    }, () => { this.checkCanGenetare(colId); });
  }

  changeTitle = (value, colId) => {
    const newArr = this.state.cols.filter((i) => {
      if (colId === i.id) {
        i.title = value;
      }
      return i;
    });
    this.setState({
      cols: newArr
    });
  }

  handleTitleClick = (e) => {
    this.setState({
      isDisabled: !this.state.isDisabled
    });
    this.titleInput.focus();
  }

  changeTargetTitle = (e) => {
    this.setState({
      targetTitle: e.target.value,
      isDisabled: true
    });
  }

  handleTitleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.changeTargetTitle(e);
      this.titleInput.blur();
    }
  }

  render() {
    const targetTitle = this.state.targetTitle;
    const showInput = !this.state.isDisabled ? 'input_fill' : '';
    return (
      <div>
        <div className={`grid_head ${showInput}`}>
          <h2 className="h2 grid_title" onClick={this.handleTitleClick}>{targetTitle}</h2>
          <input
            className="h2 input_title"
            type="text"
            defaultValue={targetTitle}
            ref={(input) => { this.titleInput = input; }}
            onBlur={this.changeTargetTitle}
            onKeyUp={this.handleTitleKeyUp}
          />
        </div>
        <div className="grid">
          {this.state.cols.map((c) => (
            <Col
              key={c.id}
              title={c.title}
              rows={c.rows}
              id={c.id}
              handleDel={this.handleDel}
              addRow={this.addRow}
              delRow={this.delRow}
              changeTitle={this.changeTitle}
              showInput={c.showInput}
            />
          ))}
          <div className="plus">
            <button className="btn_plus" onClick={this.handleAdd}>+</button>
          </div>
        </div>
        <div className="grid_btn">
          <button className="btn" disabled={!this.state.canGenerate} onClick={this.handleGen}>Generate</button>
        </div>
        <div className="grid_result">Result: {this.state.rand}</div>
      </div>
    );
  }
}

export default MorphoBox;
