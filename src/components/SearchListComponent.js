import { Divider, List, ListSubheader, makeStyles } from '@material-ui/core';
import React from 'react';
import SearchListItem from './SearchListItemComponent';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
    maxHeight: 375,
    overflow: 'auto',
    padding: 0,
  },
}));

function SearchList({items}) {
  const classes = useStyles();

  let searchListItems = [];

  searchListItems.push( 
    <ListSubheader component="div">
      movies
    </ListSubheader>
  )

  searchListItems.push(
    items.movies.map((item) => {
      return (
        <SearchListItem item={item} page='movies' />
      );
    })
  );

  searchListItems.push( 
    <ListSubheader component="div">
      series
    </ListSubheader>
  )

  searchListItems.push(
    items.series.map((item) => {
      return (
        <SearchListItem item={item} page='series' />
      );
    })
  );

  searchListItems.push( 
    <ListSubheader component="div">
      animes
    </ListSubheader>
  )

  searchListItems.push(
    items.animes.map((item) => {
      return (
        <SearchListItem item={item} page='animes' />
      );
    })
  );

  return (
    <List className={classes.root}>
      {searchListItems}
    </List>
  );

}

export default SearchList;