import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

class Row extends React.Component {
  state = {
    value: ''
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }
  handleAddRow = () => {
    this.props.addRow(this.state.value, this.props.id);
    this.setState({ value: '' });
  }
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleAddRow();
    }
  }

  render() {
    return (
      <div className="grid_row">
        <button
          disabled={!this.state.value}
          className="btn btn_sml"
          onClick={this.handleAddRow}
        >+</button>
        <Input
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

Row.propTypes = {
  addRow: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default Row;
