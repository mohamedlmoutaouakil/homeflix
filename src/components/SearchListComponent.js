import { Divider, List, makeStyles } from '@material-ui/core';
import React from 'react';
import SearchListItem from './SearchListItemComponent';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
    maxHeight: 375,
    overflow: 'auto',
  },
}));

function SearchList({items}) {
  const classes = useStyles();

  const searchListItems = items.map((item, index) => {
    if (index != items.length-1){
      return (
        <>
          <SearchListItem item={item} />
          <Divider variant="inset" component="li" />
        </>
      );
    }
    else {
      return (
        <>
          <SearchListItem item={item} />
        </>
      );
    }
  })

  return (
    <List className={classes.root}>
      {searchListItems}
    </List>
  );

}

export default SearchList;