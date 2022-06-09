import React, { Component } from 'react';

//class component to render the number of events
class NumberOfEvents extends Component {

  //initialize state of numberOfEvents to the default '32' and message to a blank string
  state = {
    numberOfEvents: 32,
    message: ''
  };

  //if input is changed, update state of numberOfEvents if input is within valid range
  handleInputChanged = (e) => {
    const userInput = e.target.value;
    if (userInput < 1 || userInput > 32) {
      this.setState({
        numberOfEvents: '32',
        message: 'Out of range - please enter a number between 1 and 32'
      })
    } else {
      this.setState({
        numberOfEvents: userInput,
        message: ''
      });
    }
    this.props.updateEvents(undefined, userInput);
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
        />
      </div>
    );
  }
}

export default NumberOfEvents;