import React from 'react';
import data from '../data';

class SetupMorphoBox extends React.Component {
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

  handleSubmit = (e) => {
    console.log('Submit');
    e.preventDefault();
  }

  render() {
    return (
      <form id="" name="MorphoboxForm" className="block" autoComplete="off" noValidate onSubmit={this.handleSubmit}>
        <h2>Setup your morphobox</h2>
        <div className="form_row">
          <label htmlFor="goal_title">Add goal title</label>
          <input id="goal_title" name="goal_title" type="text" className="input_text" />
        </div>
        <div className="form_row">
          <label htmlFor="axis_1_title">Add axis 1 title</label>
          <input id="axis_1_title" name="axis_1_title" type="text" className="input_text" />
        </div>
        <div className="form_row">
          <label htmlFor="axis_2_title">Add axis 2 title</label>
          <input id="axis_2_title" name="axis_2_title" type="text" className="input_text" />
        </div>
        <div className="form_row">
          <button className="btn">Create</button>
        </div>
      </form>
    );
  }
}

export default SetupMorphoBox;
