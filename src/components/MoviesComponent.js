import { Breadcrumbs, Container, Link, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import MediaList from './MediaListComponent';

const useStyles = makeStyles((theme) => ({
  breadcrumbs: {
    margin: theme.spacing(2),
  },
  itemsCount: {
    margin: theme.spacing(2),
  },
}));

function Movies(props) {
  const classes = useStyles();

  return (
    <Container fixed>
      <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
        <Link color="inherit" href="/home">
          Home
        </Link>
        <Typography color="textPrimary">Movies</Typography>
      </Breadcrumbs>
      <div className={classes.itemsCount}>
        <Typography variant='caption'>{props.movies.length} movies</Typography>
      </div>
      <MediaList items={props.movies} subheader='Movies' />
    </Container>
  );
}

export default Movies;