import * as ActionTypes from './ActionTypes';

export const Series = (state = {
  isLoading: true,
  errMess: null,
  series: []
}, action) => {
switch(action.type) {
  case ActionTypes.ADD_SERIES:
      return {isLoading: false, errMess: null, series: action.payload, movies: state.movies, animes: state.animes}
  case ActionTypes.SERIES_LOADING:
      return {isLoading: true, errMess: null, series: [], movies: state.movies, animes: state.animes}
  case ActionTypes.SERIES_FAILED:
      return {isLoading: false, errMess: action.payload, series: [], movies: state.movies, animes: state.animes}
  default:
      return state;
}
}