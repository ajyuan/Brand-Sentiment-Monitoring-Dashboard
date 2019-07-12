import React from 'react';
import { Button } from 'react-bootstrap'
const Twitter = require('twitter-node-client').Twitter;

const config = {
    'consumerKey': "CNhkRnj2G4VBfxNS2muTLVHlA",
    'consumerSecret': "eGwDdvcvZIhQWMpElPNlBZICIwzfPWG8DNFfIoWNmIhyNtN0mY",
    'accessToken': "2314802384-1DChgFJp5CdAKqIIatRMEJQHCw9AGMIg6evKZ6v",
    'accessTokenSecret': "9NwYMXa1Ted6QgKfbdQWSKLzvZRxUmHLwqOsqgX3dGVnl"
};

class ScrapeTweet extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    items: []
  };

  componentDidMount() {

    fetch("/ping")
    .then(response => response.json())
    .then(result => {
      console.log("result",result.statuses[0].text);
      this.setState({
        isLoaded: true,
        items: result.statuses
      });
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    error => {
      console.log("error");
      this.setState({
        isLoaded: true,
        error
      });
    }
    );
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li>
              {item.text}
            </li>
          ))}
        </ul>
      );
    }
  }
}



export default ScrapeTweet;