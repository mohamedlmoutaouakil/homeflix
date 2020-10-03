import { Avatar, ListItem, ListItemAvatar, ListItemText, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  inline: {
    display: 'inline',
    marginRight: theme.spacing(1),
  },
  avatar: {
    width: 53,
    height: 70,
    marginRight: theme.spacing(2),
  },
  year: {
    marginLeft: theme.spacing(2),
  },
  listItem: {
    color: 'inherit',
  },
}));

function SearchListItem({item}) {

  const classes = useStyles();

  return (
    <ListItem className={classes.listItem} component="a" href='/animes' alignItems="flex-start">
      <ListItemAvatar>
        <Avatar variant="square" className={classes.avatar} alt={item.name} src={item.poster} />
      </ListItemAvatar>
      <ListItemText
        primary={item.name}
        secondary={
          <>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {item.category}
            </Typography>
            <Typography
              component="span"
              variant="body2">
                {item.year}
              </Typography>
          </>
        }
      />
    </ListItem>
  );

}

export default SearchListItem;