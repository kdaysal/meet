# meet-app
<p float="center">
  <img src="#" width="300" />
</p>

## Description
* This repo will be used to build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events from the Career Foundry calendar.

## Purpose
  * A progressive web application that allows users to interact with a live Career Foundry Google Calendar API feed. Users can see a list of events by various cities, click to view more details of specific events, and see a visual breakdown (via dynamic charts) of the number and types of events by city - even if the user is offline!

## Primary Features
### Home page

* Users can filter the main event list by a specific city.

* Users can Show/hide event details by clicking a button.

* Users can limit the number of events to display on the page.

* Once an initial connection has been established online, users can revisit the app while offline to see data from their previous session.

* Users may add an app shortcut to their home screen (mobile and desktop).

* Users have access to 2 data visualizations (charts) which show the number of upcoming events by city and percentage breakdown of event genres (categories).


## Technologies used in this build

* React
* JavaScript
* Node.js
* Jest (unit testing)
* Cucumber (integration testing)
* Puppeteer (end-to-end testing)
* HTML, CSS
* Google Calendar API in conjunction with OAuth2
* AWS Lambda (serverless functions, authentication-test-server

## Steps to run this application locally
```
* Install latest version of Node.js / npm
* Clone this repository (main branch): https://github.com/kdaysal/meet 
* Open your CLI and navigate to your project folder directory
* Type 'npm run start' to run the server and open a new browser window

```