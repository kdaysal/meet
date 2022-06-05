import React, { Component } from 'react';

//class component to render the number of events
class NumberOfEvents extends Component {

  render() {
    return (
      <div className="number-events-wrapper">
        <input
          type="number"
          className="number-events-input"
          value={this.props.numberOfEvents}>
        </input>
      </div>
    );
  }
}

export default NumberOfEvents;