import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Link from '@material-ui/core/Link';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Fade, Paper, Popper } from '@material-ui/core';
import SearchList from './SearchListComponent';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: theme.spacing(3),
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 'auto',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 'auto',
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  popper: {
    width: 250,
  },
  typography: {
    padding: theme.spacing(2),
  }
}));

function Header(props) {
  const classes = useStyles();

  const [searchResults, setSearchResults] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);

  const performSearch = (event) => {

    const searchValue = event.target.value;
    let allItems = {
      movies: props.movies,
      series: props.series,
      animes: props.animes,
      totalResults: 0
    }

    if (searchValue.length > 2){
      setAnchorEl(event.currentTarget);
      
      allItems.movies = allItems.movies.filter(
        (item) => item.name.toLowerCase().startsWith(searchValue.toLowerCase())
      )
      allItems.series = allItems.series.filter(
        (item) => item.name.toLowerCase().startsWith(searchValue.toLowerCase())
      )
      allItems.animes = allItems.animes.filter(
        (item) => item.name.toLowerCase().startsWith(searchValue.toLowerCase())
      )
      allItems.totalResults = allItems.movies.length + allItems.series.length + allItems.animes.length;
      setSearchResults(allItems);
    }
    else {
      if (anchorEl) {
        setAnchorEl(null);
      }
    }

  }

  const open = Boolean(anchorEl);

  let popperContent = (<Typography className={classes.typography}>No results found</Typography>);
  if (searchResults.totalResults > 0)
    popperContent = (<SearchList items={searchResults} />);


  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link color="inherit" href="/home">Home</Link>
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link color="inherit" href="/movies">Movies</Link>
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link color="inherit" href="/series">Series</Link>
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link color="inherit" href="/animes">Animes</Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={performSearch}
              // onBlur={() => {setAnchorEl(null)}}
              onClick={performSearch}
            />
          </div>
          <Popper className={classes.popper} open={open} anchorEl={anchorEl} placement="bottom" transition disablePortal>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper className={classes.paper}>
                  {popperContent}
                </Paper>
              </Fade>
            )}
          </Popper>
        </Toolbar>
      </AppBar>
      <Toolbar /> 
    </div>
  );
}

export default Header;