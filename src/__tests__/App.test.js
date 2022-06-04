import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';

//'<App /> component' is a new 'scope'
//renders the 'App' component using the shallow rendering API
//this test ensures that there exists only one EventList component within the App component
describe('<App /> component', () => {
  test('render list of events', () => {
    const AppWrapper = shallow(<App />);
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });
});