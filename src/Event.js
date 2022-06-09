import React, { Component } from "react";

class Event extends Component {

  //initialized state of 'collapsed' to true, since event details should be hidden by default until the user clicks the show-details button
  state = {
    collapsed: true,
  };

  //when a user clicks the show/hide-details button, toggle the state to be the reverse of whatever its current state was at the time the button was pressed
  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;

    return (
      <div className="event-wrapper">
        <div className="event">
          <h2 className="summary">{event.summary}</h2>
          <p className="start-date-time">Starts: {event.start.dateTime} ({event.start.timeZone}) </p>
          <p className="end-date-time">Ends: {event.end.dateTime}</p>
          <p className="location">Happening in: {event.location}</p>

          {/* Add a button with an additional className that is conditionally generated based on the state of 'collapsed' */}
          <button
            variant="outline-info"
            className={`more-details-button ${collapsed ? "show" : "hide"}-details`}
            onClick={this.handleClick}
          >
            {collapsed ? "Show Details" : "Hide Details"}
          </button>

          {!collapsed && (
            <div className="show-more-details">
              <h4>Event details:</h4>
              <p className="event-organizer">Organized by: {event.organizer.email}</p>
              <br></br>
              <p className="event-description">{event.description}</p>
            </div>
          )}

        </div>
      </div>
    )
  }
}
export default Event;