import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  // console.log('Action received', action);

  switch (action.type) {
    case FETCH_WEATHER:
      // instead of mutating our state like:
      // return state.push(action.payload.data);
      // we return a new array
      // return state.concat([action.payload.data]);
      return [ action.payload.data, ...state ]; //es6 syntax
  }

  return state;
}