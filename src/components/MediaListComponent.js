import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import MediaCard from './MediaCardComponent';
import { ListSubheader } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

function MediaList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={'auto'} className={classes.gridList} cols={5} spacing={6}>
        <GridListTile key="Subheader" cols={5} style={{ height: 'auto' }}>
          <ListSubheader component="div">Movies</ListSubheader>
        </GridListTile>
        {props.items.map((item) => (
          <GridListTile key={item.id} cols={1}>
            <MediaCard item={item} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default  MediaList;