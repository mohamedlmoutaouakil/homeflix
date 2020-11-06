import React, { useEffect } from 'react';
import Header from './HeaderComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Home from './HomeComponent';
import Movies from './MoviesComponent';
import Series from './SeriesComponent';
import Animes from './AnimesComponent';
import { connect, useDispatch } from 'react-redux';
import { fetchAnimes, fetchMovies, fetchSeries } from '../redux/ActionCreators';
import MediaPlayer from './MediaPlayerComponent';

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

  const movies = props.movies.movies;
  const series = props.series.series;
  const animes = props.animes.animes;

  const MoviesPage = () => {
    return (
      <Movies 
        movies={movies}
        isLoading={props.movies.isLoading}
        errMess={props.movies.errMess}/>
    );
  }
  
  const SeriesPage = () => {
    return (
      <Series 
        series={series}
        isLoading={props.series.isLoading}
        errMess={props.series.errMess}/>
    );
  }
  
  const AnimesPage = () => {
    return (
      <Animes 
        animes={animes}
        isLoading={props.animes.isLoading}
        errMess={props.animes.errMess}/>
    );
  }

  const MediaPlayerPage = ({match}) => {
    let allMedia = [];
    allMedia = allMedia.concat(movies, series, animes);

    return (
      <MediaPlayer item={allMedia.filter((m) => m.id === parseInt(match.params.id, 10))[0]} 
        isLoading={props.movies.isLoading || props.series.isLoading || props.animes.isLoading}
        errMess={props.movies.errMess || props.series.errMess || props.animes.errMess}/>
    );
  }

  return (
    <div className="App">
      <Header 
        movies={props.movies.movies}
        series={props.series.series}
        animes={props.animes.animes}
      />
      <Switch>
        <Route path="/home" component={() => <Home />} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route exact path="/series" component={SeriesPage} />
        <Route exact path="/animes" component={AnimesPage} />
        <Route exact path="/medias/:id" component={MediaPlayerPage} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));