import * as ActionTypes from './ActionTypes';

export const Animes = (state = {
  isLoading: true,
  errMess: null,
  animes: []
}, action) => {
switch(action.type) {
  case ActionTypes.ADD_ANIMES:
      return {isLoading: false, errMess: null, animes: action.payload, movies: state.movies, series: state.series}
  case ActionTypes.ANIMES_LOADING:
      return {isLoading: true, errMess: null, animes: [], movies: state.movies,  series: state.series}
  case ActionTypes.ANIMES_FAILED:
      return {isLoading: false, errMess: action.payload, animes: [], movies: state.movies,   series: state.series}
  default:
      return state;
}
}