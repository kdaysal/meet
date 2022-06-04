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

  //just test whether the more-details-button actually renders
  test("render the show details button", () => {
    const EventWrapper = shallow(<Event event={mockData[0]} />);
    expect(EventWrapper.find(".more-details-button")).toHaveLength(1);
  });

  //check whether state of 'collapsed' is set to 'true' when the Event component is first rendered
  test('event details are collapsed by default upon initial render', () => {
    const EventWrapper = shallow(<Event event={mockData[0]} />);
    expect(EventWrapper.state('collapsed')).toBe(true);
  });

  //check whether simulating a click on show-details button changes state of 'collapsed' to false
  test("clicking show-details button changes state of 'collapsed' to 'false'", () => {
    const EventWrapper = shallow(<Event event={mockData[0]} />);
    EventWrapper.setState({ collapsed: true });
    EventWrapper.find('.more-details-button').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(false);
  });

  //check whether simulating a click on hide-details button changes state of 'collapsed' to true
  test("clicking hide-details button changes state of 'collapsed' to 'true'", () => {
    const EventWrapper = shallow(<Event event={mockData[0]} />);
    EventWrapper.setState({ collapsed: false });
    EventWrapper.find('.more-details-button').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(true);
  });

});