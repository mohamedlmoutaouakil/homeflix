import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 'auto',
    maxHeight: 475,
    margin: 8,
  },
  img: {
    maxHeight: 500,
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  }
});

function MediaCard({item, page}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={`${page}/${item.id}`} className={classes.link}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={item.name}
            className={classes.img}
            image={item.poster}
            title={item.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" noWrap>
              {item.name}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="h2">
              {item.category}  ({item.year})
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}

export default MediaCard;