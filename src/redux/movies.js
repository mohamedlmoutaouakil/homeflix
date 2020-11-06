import * as ActionTypes from './ActionTypes';

export const Movies = (state = {
  isLoading: true,
  errMess: null,
  movies: []
}, action) => {
  switch(action.type) {
    case ActionTypes.ADD_MOVIES:
      return {isLoading: false, errMess: null, movies: action.payload, series: state.series, animes: state.animes}
    case ActionTypes.MOVIES_LOADING:
      return {isLoading: true, errMess: null, movies: [], series: state.series, animes: state.animes}
    case ActionTypes.MOVIES_FAILED:
      return {isLoading: false, errMess: action.payload, movies: [], series: state.series, animes: state.animes}
    default:
      return state;
  }
}