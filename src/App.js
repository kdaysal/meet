import './nprogress.css';
import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';

class App extends Component {

  //initialize states to empty/default
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
  }



  //using this.mounted boolean to update the state only if the component is mounted
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
    this.updateEvents('all', 32);//testing to see if this limits the initial loading of 'all' events from the API to only 32
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  //note - I'm also setting default values for the location and eventCount parameters
  updateEvents = (location = 'all', eventCount = '32') => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, eventCount),
          numberOfEvents: eventCount
        });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <br></br>
        <br></br>
        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          updateEvents={this.updateEvents}
        />
        <EventList events={this.state.events} />

      </div>
    );
  }
}

export default App;