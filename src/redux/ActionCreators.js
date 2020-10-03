import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl'

export const fetchMovies = () => (dispatch) => {
  dispatch(moviesLoading(true));

  return fetch(baseUrl + 'movies')
    .then(response => {
      if (response.ok) {
        return response;
      }
      else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        throw error;
      }
    },
    error => {
      var errmess = new Error(error.message);
      throw errmess;
    })
    .then(response => response.json())
    .then(movies => dispatch(addMovies(movies)))
    .catch(error => dispatch(moviesFailed(error.message)));
}

export const addMovies = (movies) => ({
  type: ActionTypes.ADD_MOVIES,
  payload: movies
});

export const moviesLoading = () => ({
  type: ActionTypes.MOVIES_LOADING
});

export const moviesFailed = (errmess) => ({
  type: ActionTypes.MOVIES_FAILED,
  payload: errmess
});

export const fetchSeries = () => (dispatch) => {
  dispatch(seriesLoading(true));

  return fetch(baseUrl + 'series')
    .then(response => {
      if (response.ok) {
        return response;
      }
      else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        throw error;
      }
    },
    error => {
      var errmess = new Error(error.message);
      throw errmess;
    })
    .then(response => response.json())
    .then(series => dispatch(addSeries(series)))
    .catch(error => dispatch(seriesFailed(error.message)));
}

export const addSeries = (series) => ({
  type: ActionTypes.ADD_SERIES,
  payload: series
});

export const seriesLoading = () => ({
  type: ActionTypes.SERIES_LOADING
});

export const seriesFailed = (errmess) => ({
  type: ActionTypes.SERIES_FAILED,
  payload: errmess
});

export const fetchAnimes = () => (dispatch) => {
  dispatch(animesLoading(true));

  return fetch(baseUrl + 'animes')
    .then(response => {
      if (response.ok) {
        return response;
      }
      else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        throw error;
      }
    },
    error => {
      var errmess = new Error(error.message);
      throw errmess;
    })
    .then(response => response.json())
    .then(animes => dispatch(addAnimes(animes)))
    .catch(error => dispatch(animesFailed(error.message)));
}

export const addAnimes = (animes) => ({
  type: ActionTypes.ADD_ANIMES,
  payload: animes
});

export const animesLoading = () => ({
  type: ActionTypes.ANIMES_LOADING
});

export const animesFailed = (errmess) => ({
  type: ActionTypes.ANIMES_FAILED,
  payload: errmess
});
