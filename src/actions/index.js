import axios from 'axios';

const API_KEY = 'faad6299114275e64637cb698ffcd55c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// action creator always return an action
// and action is an object always have a type

// responsible for creating an action that
// contains a request to the backend api
// takes /city/ as search parameter
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  // request is the Promise, and Promise don't contain data
  // console.log('Request is: ', request);

  // we see our data in our payload, it's because of Redux-Promise Middleware
  // if the action have a promise as a payload, it will stop the action
  // only after the promise resolves, create a new action and send it to reducers
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
