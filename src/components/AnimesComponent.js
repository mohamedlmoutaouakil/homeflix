import { Breadcrumbs, CircularProgress, Container, Link, makeStyles, Typography } from '@material-ui/core';
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

function Animes(props) {
  const classes = useStyles();
  if (props.isLoading) {
    return (
      <Container fixed>
        <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
          <Link color="inherit" href="/home">
            Home
          </Link>
          <Typography color="textPrimary">Animes</Typography>
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
          <Typography color="textPrimary">Animes</Typography>
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
          <Typography color="textPrimary">Animes</Typography>
        </Breadcrumbs>
        <div className={classes.itemsCount}>
          <Typography variant='caption'>{props.animes.length} animes</Typography>
        </div>
        <MediaList items={props.animes} page='animes' subheader='Animes' />
      </Container>
    );
  }
}

export default Animes;