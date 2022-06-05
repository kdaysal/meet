import React, { Component } from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {

  //test that the NumberOfEvents input field actually renders
  test('render text input field', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find('.number-events-input')).toHaveLength(1);
  });

})