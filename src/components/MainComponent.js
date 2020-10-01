import React from 'react';
import Header from './HeaderComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './HomeComponent';
import Movies from './MoviesComponent';
import {MOVIES} from '../shared/movies';
import Series from './SeriesComponent';
import Animes from './AnimesComponent';

function Main() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={() => <Home />} />
        <Route exact path="/movies" component={() => <Movies movies={MOVIES}/>} />
        <Route exact path="/series" component={() => <Series series={MOVIES}/>} />
        <Route exact path="/animes" component={() => <Animes animes={MOVIES}/>} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default Main;