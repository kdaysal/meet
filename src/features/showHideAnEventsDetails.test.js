import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import CitySearch from '../CitySearch';
import { extractLocations } from '../api';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');
const locations = extractLocations(mockData);

defineFeature(feature, test => {

  let AppWrapper; //declare AppWrapper within defineFeature() and before the first test
  //Scenario 1
  test('An event element is collapsed by default.', ({ given, when, then }) => {

    given('the user is on the main page', () => {
      //simply mount the App component to meet this criteria
      AppWrapper = mount(<App />);
    });

    when('the user has not clicked on an event element', () => {
      //intentionally blank
    });

    then('the event element is collapsed by default', () => {
      expect(AppWrapper.find('.show-more-details')).toHaveLength(0);
    });
  });

  //Scenario 2
  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('the user is on the main page', () => {

    });

    when('the user clicks the Show Details button', () => {

    });

    then('the event element expands to reveal more details', () => {

    });
  });

  //Scenario 3
  test('User can collapse an event to hide its details', ({ given, and, when, then }) => {
    given('the user is on the main page', () => {

    });

    and('an event element is currently expanded to show more details', () => {

    });

    when('the user clicks the Hide Details button', () => {

    });

    then('the event element should collapse to hide the extra details', () => {

    });
  });

});
