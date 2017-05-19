import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  state = {
    value: ''
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.addRow(this.state.value, this.props.id);
      this.state.value = '';
    }
  }
  render() {
    return (
      <div className="grid_row">
        <button
          disabled={!this.state.value}
          className="btn btn_sml"
          onClick={() => { this.props.addRow(this.state.value, this.props.id); this.state.value = ''; }}
        >+</button>
        <input
          type="text"
          className="input_text"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

Input.propTypes = {
  addRow: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default Input;
