import React, { Component } from "react";

class Event extends Component {
  render() {
    const { event } = this.props;

    return (
      <div className="event">
        <h2 className="summary">{event.summary}</h2>
        <p className="start-date-time">{event.start.dateTime} in time zone: {event.start.timeZone}</p>
        <p className="location">Happening in: {event.location}</p>
      </div> //end "event" <div>
    )
  }
}
export default Event;