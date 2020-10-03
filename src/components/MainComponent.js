import React, { useEffect } from 'react';
import Header from './HeaderComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Home from './HomeComponent';
import Movies from './MoviesComponent';
import Series from './SeriesComponent';
import Animes from './AnimesComponent';
import { connect, useDispatch } from 'react-redux';
import { fetchAnimes, fetchMovies, fetchSeries } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    movies: state.movies,
    series: state.series,
    animes: state.animes
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => {dispatch(fetchMovies())},
  fetchSeries: () => {dispatch(fetchSeries())},
  fetchAnimes: () => {dispatch(fetchAnimes())}
});

function Main(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    props.fetchMovies();
    props.fetchSeries();
    props.fetchAnimes();
  }, [dispatch]);

  const MoviesPage = () => {
    return (
      <Movies 
        movies={props.movies.movies}
        isLoading={props.movies.isLoading}
        errMess={props.movies.errMess}/>
    );
  }
  
  const SeriesPage = () => {
    return (
      <Series 
        series={props.series.series}
        isLoading={props.series.isLoading}
        errMess={props.series.errMess}/>
    );
  }
  
  const AnimesPage = () => {
    return (
      <Animes 
        animes={props.animes.animes}
        isLoading={props.animes.isLoading}
        errMess={props.animes.errMess}/>
    );
  }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={() => <Home />} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route exact path="/series" component={SeriesPage} />
        <Route exact path="/animes" component={AnimesPage} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));