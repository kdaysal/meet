import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {

  //most basic of all the tests - check if a single event is rendered
  test('render a single event (1st element of mockData)', () => {
    const EventWrapper = shallow(<Event event={mockData[0]} />);
    expect(EventWrapper.find(".event")).toHaveLength(1);
  });

  test('render the summary of the event', () => {
    const EventWrapper = shallow(<Event event={mockData[0]} />);
    expect(EventWrapper.find(".summary")).toHaveLength(1);
  })

  test('render the start date and time zone for the event', () => {
    const EventWrapper = shallow(<Event event={mockData[0]} />);
    expect(EventWrapper.find(".start-date-time")).toHaveLength(1);
  })

  test('render the location for the event', () => {
    const EventWrapper = shallow(<Event event={mockData[0]} />);
    expect(EventWrapper.find(".location")).toHaveLength(1);
  })

});