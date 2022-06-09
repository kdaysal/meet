import React, { Component } from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {

  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />)
  });

  //test that the NumberOfEvents input field actually renders
  test('render text input field', () => {
    expect(NumberOfEventsWrapper.find('.number-events-input')).toHaveLength(1);
  });

  //test whether setting the state of numberOfEvents manually (via code, not user-input) updates the state
  test('check whether state of numberOfEvents can be updated (manually)', () => {
    NumberOfEventsWrapper.setState({ numberOfEvents: '15' });
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual("15");
  });

  //simulate a change (within acceptable range) to numberOfEvents via user input
  test('update state of numberOfEvents when the user changes the input', () => {
    NumberOfEventsWrapper.setState({ numberOfEvents: '32' });
    NumberOfEventsWrapper.find('.number-events-input').simulate('change', { target: { value: "5" } });
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual("5");
  });

  //testing the message - simulate a change (below acceptable range) to numberOfEvents via user input
  test('update state of message if numberOfEvents is below range', () => {
    NumberOfEventsWrapper.setState({ numberOfEvents: '32' });
    NumberOfEventsWrapper.find('.number-events-input').simulate('change', { target: { value: "0" } });
    expect(NumberOfEventsWrapper.state('message')).toEqual('Out of range - please enter a number between 1 and 32');
  });

  //testing the message - simulate a change (above acceptable range) to numberOfEvents via user input
  test('update state of message if numberOfEvents is above range', () => {
    NumberOfEventsWrapper.setState({ numberOfEvents: '32' });
    NumberOfEventsWrapper.find('.number-events-input').simulate('change', { target: { value: "33" } });
    expect(NumberOfEventsWrapper.state('message')).toEqual('Out of range - please enter a number between 1 and 32');
  });

  //testing the state of numberOfEvents - simulate a change (below acceptable range) to numberOfEvents via user input
  test('if numberOfEvents is below range, state of numberOfEvents is unchanged', () => {
    NumberOfEventsWrapper.setState({ numberOfEvents: '32' });
    NumberOfEventsWrapper.find('.number-events-input').simulate('change', { target: { value: "0" } });
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual('32');
  });

  //testing the state of numberOfEvents - simulate a change (above acceptable range) to numberOfEvents via user input
  test('if numberOfEvents is above range, state of numberOfEvents is unchanged', () => {
    NumberOfEventsWrapper.setState({ numberOfEvents: '32' });
    NumberOfEventsWrapper.find('.number-events-input').simulate('change', { target: { value: "33" } });
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual('32');
  });

})