# meet-app

# Description
This repo will be used to build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

# Purpose
<ul>
  <li>A progressive web application that allows users to interact with a live Career Foundry Google Calendar API feed. Users can see a list of events by various cities, click to view more details of specific events, and see a visual breakdown (via dynamic charts) of the number and types of events by city - even if the user is offline!</li>

# Primary Features
Home page
<ul>
<li>Users can filter the main event list by a specific city.</li>
<li>Users can Show/hide event details by clicking a button.</li>
<li>Users can limit the number of events to display on the page.</li>
<li>Once an initial connection has been established online, users can revisit the app while offline to see data from their previous session.</li>
<li>Users may add an app shortcut to their home screen (mobile and desktop).</li>
<li>Users have access to 2 data visualizations (charts) which show the number of upcoming events by city and percentage breakdown of event genres (categories).</li>
</ul>

## Technologies used in this build
<ul>
<li>React</li>
<li>JavaScript</li>
<li>Node.js</li>
<li>Jest (unit testing)</li>
<li>Cucumber (integration testing)</li>
<li>Puppeteer (end-to-end testing)</li>
<li>HTML, CSS</li>
<li>Google Calendar API in conjunction with OAuth2</li>
<li>AWS Lambda (serverless functions, authentication-test-server</li>

</ul>

## Steps to run this application locally
```
* Install latest version of Node.js / npm
* Clone this repository (main branch): https://github.com/kdaysal/meet 
* Open your CLI and navigate to your project folder directory
* Type 'npm run start' to run the server and open a new browser window

```