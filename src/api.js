import NProgress from 'nprogress';
import { mockData } from './mock-data';
import axios from 'axios';

/**
 * @param {*} events:
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */
export const extractLocations = (events) => {
  var extractLocations = events.map((event) => event.location);
  var locations = [...new Set(extractLocations)];
  return locations;
};

//check validity of access token
export const checkToken = async (accessToken) => {
  const result = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  )
    .then((res) => res.json())
    .catch((error) => error.json());

  return result;
};

//if I'm using localhost, then return mock data; otherwise, return the real API data
export const getEvents = async () => {
  console.log(`getEvents called`);
  NProgress.start();

  if (window.location.href.startsWith("http://localhost")) {
    NProgress.done();
    return mockData;
  }

  //check if user is online; if not online, load data from the stored event list instead of the google calendar api
  if (!navigator.onLine) {
    const data = localStorage.getItem("lastEvents");
    NProgress.done();
    return data ? JSON.parse(data).events : [];;
  }

  const token = await getAccessToken();

  if (token) {
    //removeQuery() will remove the code from the URL once I'm finished with it
    removeQuery();
    const url = 'https://l3jqamhq7a.execute-api.us-east-1.amazonaws.com/dev/api/get-events' + '/' + token;
    const result = await axios.get(url);
    if (result.data) {
      var locations = extractLocations(result.data.events);
      localStorage.setItem("lastEvents", JSON.stringify(result.data));
      localStorage.setItem("locations", JSON.stringify(locations));
    }
    NProgress.done();
    return result.data.events;
  }
};

//check whether there's a path, then build the URL with the current path (or build the URL without a path using 'window.history.pushState()')
const removeQuery = () => {
  if (window.history.pushState && window.location.pathname) {
    var newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname;
    window.history.pushState("", "", newurl);
  } else {
    newurl = window.location.protocol + "//" + window.location.host;
    window.history.pushState("", "", newurl);
  }
};

//encodes the 'code' using encodeURIComponent, then uses the encoded code to get the token
const getToken = async (code) => {
  const encodeCode = encodeURIComponent(code);
  const { access_token } = await fetch(
    'https://l3jqamhq7a.execute-api.us-east-1.amazonaws.com/dev/api/token' + '/' + encodeCode
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => error);

  access_token && localStorage.setItem("access_token", access_token);

  return access_token;
};

//if no access token is found in local storage, redirect user to the Google Authorization screen to sign in and receive their code
export const getAccessToken = async () => {

  const accessToken = localStorage.getItem('access_token');
  const tokenCheck = accessToken && (await checkToken(accessToken));

  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem("access_token");
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get("code");

    //if no authorization code ('code) is found, redirect user to the Google Authorization screen to sign in and receive their code
    if (!code) {
      const results = await axios.get(
        "https://l3jqamhq7a.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url"
      );
      const { authUrl } = results.data;
      return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }
  return accessToken;

}