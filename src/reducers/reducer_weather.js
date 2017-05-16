import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  //console.log('action recvd', action);
  switch (action.type) {
    case FETCH_WEATHER:
      //return state.push(action.payload.data);
      //following is better
      return state.concat([ action.payload.data ]);
      //below is same ES6 syntax
      //return [ action.payload.data, ...state ];
  }
  return state;
}
