import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  let AppWrapper; //declare AppWrapper within defineFeature() and before the first test
  //Scenario 1
  test('An event element is collapsed by default.', ({ given, when, then }) => {

    given('the user is on the main page', async () => {
      //simply mount the App component to meet this criteria
      AppWrapper = await mount(<App />);
      AppWrapper.update();
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
    given('1 or more events is displayed on the page', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toBeDefined();
    });

    when('the user clicks the Show Details button', () => {
      AppWrapper.find('.more-details-button').at(0).simulate('click');
    });

    then('the event element expands to reveal more details', () => {
      expect(AppWrapper.find('.show-more-details')).toHaveLength(1);
    });
  });

  //Scenario 3
  test('User can collapse an event to hide its details', ({ given, and, when, then }) => {
    given('the user is on the main page', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
    });

    and('an event element is currently expanded to show more details', () => {
      AppWrapper.find('.more-details-button').at(0).simulate('click');
      expect(AppWrapper.find('.show-more-details')).toHaveLength(1);
    });

    when('the user clicks the Hide Details button', () => {
      AppWrapper.find('.more-details-button').at(0).simulate('click');
    });

    then('the event element should collapse to hide the extra details', () => {
      expect(AppWrapper.find('.show-more-details')).toHaveLength(0);
    });
  });

});
