import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {

  test('render a single event (1st element of mockData)', () => {
    const EventWrapper = shallow(<Event event={mockData[0]} />);
    expect(EventWrapper.find(".event")).toHaveLength(1);
  });

});