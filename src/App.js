import './nprogress.css';
import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { InfoAlert, ErrorAlert, WarningAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';



class App extends Component {

  //initialize states to empty/default
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    showWelcomeScreen: undefined //'true' = show the welcome screen; 'false' = hide the welcome screen to show other components; undefined will be used to to render an empty div until the state gets updated to 'true' or 'false'
  }



  //using this.mounted boolean to update the state only if the component is mounted
  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);

    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }

    this.updateEvents('all', 32);//Limit the # of events loaded from the API to only show 32

    //create and set state of 'warningAlertText' based on whether user is offline or online
    if (!navigator.onLine) {
      this.setState({
        warningAlertText: 'Warning: No internet connection detected! Loading list from cache.'
      });
    } else {
      this.setState({
        warningAlertText: ''
      });
    }
  }//end componentDidMount

  componentWillUnmount() {
    this.mounted = false;
  }

  //return an array consisting of just the city name and number of events in that city
  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number };
    })
    return data;
  };

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
    if (this.state.showWelcomeScreen === undefined) return <div
      className="App" />

    const { warningAlertText } = this.state;

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
        <WarningAlert text={warningAlertText} />
        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;