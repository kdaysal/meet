import React, { Component } from 'react';

class CitySearch extends Component {
  //initialize state to an empty string
  state = {
    query: '',
  }

  render() {
    return (
      <div className="CitySearch">
        <input
          type="text"
          className="city"
          value={this.state.query}
        />
        <ul className="suggestions">
        </ul>
      </div>
    );
  }
}

export default CitySearch;