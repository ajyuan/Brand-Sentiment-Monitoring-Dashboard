import React from 'react';
import { Button } from 'react-bootstrap'
const request = require('request');
const Twitter = require('twitter-node-client').Twitter;

class TwitterComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
    this.callWatson = this.callWatson.bind(this)
  }

  componentDidMount() {

    fetch("/twitter")
    .then(response => response.json())
    .then(result => {
      let twitterText = "";
      for (var i = 0; i < result.statuses.length; i++) {
        if (result.statuses[i]) {
          twitterText += result.statuses[i]['text'];
        }
      }
      this.setState({
        isLoaded: true,
        items: result.statuses,
        aggregateItems: twitterText
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

  callWatson(){
    var item = this.state.items[0].text
    console.log("item:",item);

    // var postBody = {
    //   url: '/watson',
    //   body: item
    // }
    // request.post(postBody, function(error, response) {
    //   console.log(postBody);
    //   console.log("response:",response);
    // });
    fetch('/watson/twitter', {
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({a: item})
    }).then(function(response) {
      return response.text();
    }).then(function(data) {
      console.log(data);
    });
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
        <Button onClick={this.callWatson}>Call Watson</Button>
        <ul>
          {items.map(item => (
            <li>
              {item.text}
            </li>
          ))}
        </ul>
        </div>
      );
    }
  }
}



export default TwitterComponent;
