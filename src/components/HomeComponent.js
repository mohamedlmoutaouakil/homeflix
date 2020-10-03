import { Container, Typography } from '@material-ui/core';
import React from 'react';
import {MOVIES} from '../shared/movies';
import SearcList from './SearchListComponent';

function Home() {
  return (
    <Container fixed>
      <Typography variant='h4'>
        Home
      </Typography>
      <SearcList items={MOVIES} />
    </Container>
  );
}

export default Home;