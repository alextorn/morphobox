import React from 'react';
import PropTypes from 'prop-types';

class ColTitle extends React.Component {
  state = {
    showInput: false,
    btnClicked: false
  }
  handleClick = (e) => {
    if (!this.state.showInput) {
      this.setState({
        showInput: !this.state.showInput
      });
      const valueLength = this.props.title.length;
      this.titleInput.focus();
      this.titleInput.setSelectionRange(valueLength, valueLength);
    }
  }
  handleBlur = (e) => {
    this.props.onBlur(e.target.value, this.props.id);
    this.setState({
      showInput: false
    });
  }
  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.props.onBlur(e.target.value, this.props.id);
      this.setState({
        showInput: false
      });
      this.titleInput.blur();
    }
  }
  render() {
    const show = this.state.showInput ? 'input_fill' : '';
    return (
      <div className={`grid_col_head ${show}`}>
        <button onClick={this.handleClick} className="grid_row grid_col_title">{this.props.title}</button>
        <input
          type="text"
          defaultValue={this.props.title}
          className="grid_row input_text"
          ref={(input) => { this.titleInput = input; }}
          onBlur={this.handleBlur}
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
}

ColTitle.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired
};

export default ColTitle;
