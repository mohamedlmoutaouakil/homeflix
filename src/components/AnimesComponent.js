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

function Animes(props) {
  const classes = useStyles();

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
      <MediaList items={props.animes} subheader='Animes' />
    </Container>
  );
}

export default Animes;