import { Box, CircularProgress, Typography } from '@material-ui/core';
import React from 'react';
import ReactPlayer from 'react-player';

function MediaPlayer({item, isLoading, errMess}) {

  if (isLoading) {
    return (
      <CircularProgress />
    );
  }
  else if (errMess) {
      return (
        <Typography color="error">{errMess}</Typography>
      );
  }
  else {
    return (
      <div>
        <Box display="flex" px="10%" py={1}>
          <Typography variant="h5">{item.title}</Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <ReactPlayer url={item.url} width="80%" height="auto" controls />
        </Box>
        <Box display="flex" px="10%" py={1}>
          <Box fontWeight="fontWeightLight">Release year: {item.year}</Box>
          <Box fontWeight="fontWeightLight" ml={1}>Genre: {item.genre}</Box>
        </Box>
        <Box display="flex" px="10%" py={1}>
          {item.plot}
        </Box>
      </div>
    );
  }
}

export default MediaPlayer;