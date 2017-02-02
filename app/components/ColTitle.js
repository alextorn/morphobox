import React, { PropTypes } from 'react';

const ColTitle = (props) => {
  const { title } = props;
  return (
    <div className="grid_row grid_head">
      {title}
    </div>
  );
};

ColTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default ColTitle;
