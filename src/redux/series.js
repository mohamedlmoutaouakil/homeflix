import * as ActionTypes from './ActionTypes';

export const Series = (state = {
  isLoading: true,
  errMess: null,
  series: []
}, action) => {
switch(action.type) {
  case ActionTypes.ADD_SERIES:
      return {...state, isLoading: false, errMess: null, series: action.payload}
  case ActionTypes.SERIES_LOADING:
      return {...state, isLoading: true, errMess: null, series: []}
  case ActionTypes.SERIES_FAILED:
      return {...state, isLoading: false, errMess: action.payload, series: []}
  default:
      return state;
}
}