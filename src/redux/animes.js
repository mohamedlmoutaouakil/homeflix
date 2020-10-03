import * as ActionTypes from './ActionTypes';

export const Animes = (state = {
  isLoading: true,
  errMess: null,
  animes: []
}, action) => {
switch(action.type) {
  case ActionTypes.ADD_ANIMES:
      return {...state, isLoading: false, errMess: null, animes: action.payload}
  case ActionTypes.ANIMES_LOADING:
      return {...state, isLoading: true, errMess: null, animes: []}
  case ActionTypes.ANIMES_FAILED:
      return {...state, isLoading: false, errMess: action.payload, animes: []}
  default:
      return state;
}
}