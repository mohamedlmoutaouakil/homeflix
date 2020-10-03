import { applyMiddleware, combineReducers, createStore } from "redux";
import { Animes } from "./animes";
import { Movies } from "./movies";
import { Series } from "./series";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      movies: Movies,
      series: Series,
      animes: Animes
    }),
    applyMiddleware(thunk, logger)
  )

  return store;
}