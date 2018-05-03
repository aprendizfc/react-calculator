import React from 'react';
import PropTypes from 'prop-types';

// ScreenRow is written as a functional component. It receives and displays
// props of value from it's parent component
const ScreenRow = (props) => {
  return (
    <div className="screen-row">
      <input type="text" readOnly value={props.value} />
    </div>
  );
};

// we describe  the props that the parent element is required  to pass into
// this component
ScreenRow.propTypes = {
  value: PropTypes.string.isRequired,
}

export default ScreenRow;
