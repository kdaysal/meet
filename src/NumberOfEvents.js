import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

//class component to render the number of events
class NumberOfEvents extends Component {

  //initialize state of numberOfEvents to the default '32' and errorMessage to a blank string
  state = {
    numberOfEvents: 32,
    errorMessage: ''
  };

  //if input is changed, update state of numberOfEvents if input is within valid range
  handleInputChanged = (e) => {
    let userInput = e.target.value;
    if (userInput < 1 || userInput > 32) {
      this.setState({
        errorMessage: 'Out of range - please enter a number between 1 and 32'
      })
    } else {
      this.setState({
        numberOfEvents: userInput,
        errorMessage: ''
      });
      this.props.updateEvents(undefined, userInput);
    }
  };

  render() {
    // const { events, NumberOfEvents, updateEvents } = this.props;
    return (
      <div className="number-events-wrapper"> Number of Events
        <input
          type="number"
          className="number-events-input"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
          onFocus={e => e.target.select()}
          ref={inputEl => (this.searchInput = inputEl)}
        />
        <ErrorAlert text={this.state.errorMessage} />
      </div>
    );
  }
}

export default NumberOfEvents;