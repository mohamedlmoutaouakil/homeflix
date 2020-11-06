import { Breadcrumbs, Container, Link, makeStyles, Typography, CircularProgress } from '@material-ui/core';
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

function Series(props) {
  const classes = useStyles();

  if (props.isLoading) {
    return (
      <Container fixed>
        <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
          <Link color="inherit" href="/home">
            Home
          </Link>
          <Typography color="textPrimary">Series</Typography>
        </Breadcrumbs>
        <CircularProgress />
      </Container>
    );
  }
  else if (props.errMess) {
    return (
      <Container fixed>
        <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
          <Link color="inherit" href="/home">
            Home
          </Link>
          <Typography color="textPrimary">Series</Typography>
        </Breadcrumbs>
        <Typography color="error">{props.errMess}</Typography>
      </Container>
    );
  }
  else {
    return (
      <Container fixed>
        <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
          <Link color="inherit" href="/home">
            Home
          </Link>
          <Typography color="textPrimary">Series</Typography>
        </Breadcrumbs>
        <div className={classes.itemsCount}>
          <Typography variant='caption'>{props.series.length} series</Typography>
        </div>
        <MediaList items={props.series} subheader='Series' />
      </Container>
    );
  }
}

export default Series;