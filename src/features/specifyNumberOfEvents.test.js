import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
//import { mockData } from '../mock-data';
//import { extractLocations } from '../api';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

  let AppWrapper; //declare AppWrapper within defineFeature() and before the first test

  //Scenario 1
  test('When user hasn\'t specified a number, make 32 the default number', ({ given, when, then }) => {
    given('the user is on the main page', async () => {
      //simply mount the App component to meet this criteria
      AppWrapper = await mount(<App />);
      AppWrapper.update();
    });

    when('a specific number of events has not been set by the user', () => {
      //intentionally blank
    });

    then('32 events are displayed by default', () => {
      //this is equivalent to checking whether the state of events is the default '32' value
      expect(AppWrapper.state('numberOfEvents')).toEqual(32);
    });
  });

  //Scenario 2
  test('User can change the number of events they want to see', ({ given, when, then }) => {
    given('the user is on the main page', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
    });

    when('the user specifies the number of events by interacting with the NumberOfEvents textbox', () => {
      AppWrapper.find('.number-events-input').simulate('change', { target: { value: "2" } });
    });

    then('the number of events displayed on the page should match the user-specified value - or be less if not enough events exist', () => {
      AppWrapper.update();
      expect(AppWrapper.state('numberOfEvents')).toEqual("2");// check that the 'numberOfEvents' state has been updated in the App component
      expect(AppWrapper.find('.event')).toHaveLength(2);// check that the number of elements with className '.event' matches the new state of numberOfEvents
    });
  });

});