import { Breadcrumbs, Container, Link, Typography } from '@material-ui/core';
import React from 'react';
import MediaList from './MediaListComponent';

function Movies(props) {
  return (
    <Container fixed>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/home">
          Home
        </Link>
        <Typography color="textPrimary">Movies</Typography>
      </Breadcrumbs>
      <Typography variant='caption'>{props.movies.length} movies</Typography>
      <MediaList items={props.movies} />
    </Container>
  );
}

export default Movies;