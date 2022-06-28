import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
  //initialize state to an empty string
  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined,
    infoText: ''
  }

  //when a user starts typing in the City box, update the state of 'query' and 'suggestions'
  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ showSuggestions: true });
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: 'We cannot find the city you are looking for. Please try another city',
        showSuggestions: false
      });
    } else {
      this.setState({
        query: value,
        suggestions,
        infoText: ''
      });
    }
  };

  //when a user clicks on a suggestion, update the state of 'query'
  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false
    });
    this.props.updateEvents(suggestion, this.props.numberOfEvents);
  }

  render() {
    return (
      <div className="CitySearch">
        <InfoAlert text={this.state.infoText} />
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
          placeholder="Search for a city"
          onFocus={() => { this.setState({ showSuggestions: true }) }}
        //onBlur={() => { this.setState({ showSuggestions: false }) }} //this hides the suggestion list, but causes clicking on a suggestion to no longer filter the list. -leaving here as a reminder to fix later - TBD
        />

        <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' }}>
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >{suggestion}
            </li>
          ))}
          <li onClick={() => this.handleItemClicked("all")}>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;