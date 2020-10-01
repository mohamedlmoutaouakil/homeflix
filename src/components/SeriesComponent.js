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

function Series(props) {
  const classes = useStyles();

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

export default Series;