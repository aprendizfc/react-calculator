import React, { Component } from 'react';
import Screen from './Screen';
import Button from './Button';

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      question: '',
      answer: ''
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const {value} = event.target; // get the value from the target element
    switch (value) {
      // if it's an equal sign, use the eval module to evaluate the question
      case '=': {
        // convert the answer (in number) to String
        const answer = eval(this.state.question).toString();
        // update answer in our state
        this.setState({ answer });
        break;
      }
      // if it's the Cls sign, just clean our question and answer in the state
      case 'Cls': {
        this.setState({
          question: '',
          answer: '',
        });
        break;
      }
      default: {
        this.setState(function(currentState) {
          return {
            question: currentState.question + value
          }
        })
        break;
      }
    }
  }
  // render function to create component to be rendered on the DOM
  // this method must return a single parent element
  // the component is wrapped around () to make it a single expression
  render() {
    return (
      <div className="calculator">
        <div className="calculator-title">Calculator</div>
        <Screen question={this.state.question} answer={this.state.answer} />
        <div className="button-row">
          <Button label={'1'} handleClick={this.handleClick} type='input' />
          <Button label={'2'} handleClick={this.handleClick} type='input' />
          <Button label={'3'} handleClick={this.handleClick} type='input' />
          <Button label={'4'} handleClick={this.handleClick} type='input' />
          <Button label={'-'} handleClick={this.handleClick} type='input' />
          <Button label={'+'} handleClick={this.handleClick} type='input' />
        </div>
        <div className="button-row">
          <Button label={'5'} handleClick={this.handleClick} type='input' />
          <Button label={'6'} handleClick={this.handleClick} type='input' />
          <Button label={'7'} handleClick={this.handleClick} type='input' />
          <Button label={'8'} handleClick={this.handleClick} type='input' />
          <Button label={'*'} handleClick={this.handleClick} type='input' />
          <Button label={'/'} handleClick={this.handleClick} type='input' />
        </div>
        <div className="button-row">
          <Button label={'9'} handleClick={this.handleClick} type='input' />
          <Button label={'.'} handleClick={this.handleClick} type='input' />
          <Button label={'0'} handleClick={this.handleClick} type='input' />
          <Button label={'Cls'} handleClick={this.handleClick} type='input' />
          <Button label={'='} handleClick={this.handleClick} type='input' />
        </div>
      </div>
    );
  }
}

// export our calculator component. To be used  in our client/index.js file
export default Calculator;
