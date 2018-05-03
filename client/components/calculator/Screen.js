import React from 'react';
import ScreenRow from './ScreenRow';
import PropTypes from 'prop-types';

// create our Screen component as a functional component
// it would display two screen rows, 1 for questions and the other for the
// answer. The value wolud be passed down from it's parent component as props
const Screen = (props) => {
  return (
    <div className="screen">
      <ScreenRow value={props.question}></ScreenRow>
      <ScreenRow value={props.answer}></ScreenRow>
    </div>
  );
}

// define our props expected from the parent component
Screen.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
}
 // export our component
 export default Screen;
