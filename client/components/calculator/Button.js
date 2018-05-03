import React from 'react';
import PropTypes from 'prop-types';

// create our Button component  as a functional component
const Button = (props) => {
  return (
    <input
      type="text"
      className={
        props.type === 'action'
          ?
          'button action-button'
          :
          'button input-button'
      }
      onClick={props.handleClick}
      value={props.label}
    />
  );
}

// describe our expected props
Button.propTypes = {
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}

// export our Button component
export default Button;
