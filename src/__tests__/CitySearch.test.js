import React from 'react';
import { shallow } from 'enzyme';
import CitySearch from '../CitySearch';

describe('<CitySearch /> component', () => {
  //This test checks whether an element with the class name 'city' exists within the CitySearchWrapper component
  test('render text input', () => {
    const CitySearchWrapper = shallow(<CitySearch />);
    expect(CitySearchWrapper.find('.city')).toHaveLength(1);
  });

  test('renders a list of suggestions', () => {
    const CitySearchWrapper = shallow(<CitySearch />);
    expect(CitySearchWrapper.find('.suggestions')).toHaveLength(1);
  });

  test('renders text input correctly', () => {
    const CitySearchWrapper = shallow(<CitySearch />);

    //create a new variable 'query' and assign it to the value that the user types into the textbox
    const query = CitySearchWrapper.state('query');
    expect(CitySearchWrapper.find('.city').prop('value')).toBe(query);
  });

});//end describe