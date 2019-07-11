import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles(theme => ({
  twitter: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(11),
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
    height: 450,
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
}));

export default function OutlinedTextFields() {
  const classes = useStyles();

  return (
    <div>
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
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>
      <br></br>
      <div className = {classes.root}>
        <div className = {classes.twitter}>
          <div>Twitter</div>
          <br></br>
          <div>Display Results</div>
          <br></br><br></br><br></br>
          <div>Interpretation of Results</div>
        </div>
        <Divider className={classes.divider} />
        <div className = {classes.reddit}>
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
