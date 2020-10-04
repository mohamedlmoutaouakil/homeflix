import { CircularProgress, Typography } from '@material-ui/core';
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
        <ReactPlayer url={item.url} controls />
      </div>
    );
  }
}

export default MediaPlayer;