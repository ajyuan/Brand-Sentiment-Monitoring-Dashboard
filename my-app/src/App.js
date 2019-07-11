import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles(theme => ({
  twitter: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(48),
  },
  reddit: {
    marginLeft: theme.spacing(2),
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  divider: {
    width: 1,
    height: 570,
    margin: 4,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
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
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              SegFault: Search Social Media for Sentiment Analysis of Products over Time
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                  placeholder="Search products…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'Search' }}
              />
            </div>
          </Toolbar>
        </AppBar>
        <br></br>
        <div className = {classes.root}>
          <div className = {classes.twitter}>
            <br></br>
            <div>Twitter</div>
            <br></br>
            <div>Display Results</div>
            <br></br><br></br><br></br>
            <div>Interpretation of Results</div>
          </div>
          <Divider className={classes.divider} />
          <div className = {classes.reddit}>
            <br></br>
            <div>Reddit</div>
            <br></br>
            <div>Display Results</div>
            <br></br><br></br><br></br>
            <div>Interpretation of Results</div>
          </div>
        </div>
      </div>
  );
}

export default App;
