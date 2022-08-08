# meet-app
<p float="left">
  <img src="https://github.com/kdaysal/meet/blob/main/img/1-meet-app.png" width="500" />
</p>

## Purpose
  * To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. 

## Description
* Users are able to interact with data from a live Career Foundry Google Calendar API feed. Users can see a list of events by various cities, click to view more details of specific events, and see a visual breakdown (via dynamic charts) of the number and types of events by city - even if the user is offline!

## Primary Features
### Home page

* Users can filter the main event list by a specific city.

<p float="left">
  <img src="https://github.com/kdaysal/meet/blob/main/img/2-event-genre-filter.png" width="500" />
</p>

* Users can Show/hide event details by clicking a button.

<p float="left">
  <img src="https://github.com/kdaysal/meet/blob/main/img/5-show-details.png" width="500" />
</p>

* Users can limit the number of events to display on the page.

* Once an initial connection has been established online, users can revisit the app while offline to see data from their previous session.

* Users may add an app shortcut to their home screen (mobile and desktop).

* Users have access to 2 data visualizations (charts) which show the number of upcoming events by city and percentage breakdown of event genres (categories).

## User Stories

* As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.

* As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.

* As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

* As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.

* As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.

* As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

## Technologies / strategies used in this build

* React
* JavaScript
* Node.js
* [Jest](https://jestjs.io/) (for unit testing)
* [Enzyme](https://enzymejs.github.io/enzyme/docs/api/shallow.html) (for testing / shallow rendering)
* Cucumber (integration testing)
* [Puppeteer](https://github.com/puppeteer/puppeteer/blob/v1.15.0/docs/api.md) (end-to-end testing)
* TDD approach for testing
* BDD's Gherkin syntax (for breaking down user stories for testing)
* HTML, CSS
* Google Calendar API
* [OAuth2](https://developers.google.com/identity/protocols/oauth2) Authentication
* AWS Lambda ([serverless framework](https://www.serverless.com/framework/docs/), setting up an authentication-test-server)
* [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en) - used to analyze the app and rate it against PWA criteria

## Technical Requirements

The app must be a React application.
* The app must be built using the TDD technique.

* The app must use the Google Calendar API and OAuth2 authentication flow.

* The app must use serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server.

* The app’s code must be hosted in a Git repository on GitHub.

* The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11.

* The app must display well on all screen sizes (including mobile and tablet) widths of 1920px
and 320px.

* The app must pass Lighthouse’s PWA checklist.

* The app must work offline or in slow network conditions with the help of a service worker.

* Users may be able to install the app on desktop and add the app to their home screen on mobile.

* The app must be deployed on GitHub Pages.

* The API call must use React axios and async/await.

* The app must implement an alert system using an OOP approach to show information to the user.

* The app must make use of data visualization (recharts preferred).

* The app must be covered by tests with a coverage rate >= 90%.

* The app must be monitored using an online monitoring tool.

## Steps to run this application locally
```
* Install latest version of Node.js / npm
* Clone this repository (main branch): https://github.com/kdaysal/meet 
* Open your CLI and navigate to your project folder directory
* Type 'npm run start' to run the server and open a new browser window

```
* Note - upon running the app, you'll be presented with a login screen. Please follow the on-screen instructions and agree/confirm to proceed through any messages from Google pertaining to app verification (as this is still in development / WIP)

<p float="left">
  <img src="https://github.com/kdaysal/meet/blob/main/img/3-login-page.png" width="500" />
</p>

* Here is a copy of the Privacy Policy as shown on the Login screen

<p float="left">
  <img src="https://github.com/kdaysal/meet/blob/main/img/4-privacy-policy.png" width="500" />
</p>