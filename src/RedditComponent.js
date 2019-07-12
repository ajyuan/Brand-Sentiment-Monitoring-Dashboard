import React from 'react';

class RedditComponent extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    items: []
  };

  componentDidMount() {
    fetch("/reddit")
    .then(response => response.json())
    .then(result => {
      console.log(result)
      this.setState({
        isLoaded: true,
        items: result
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
          {items}
        </ul>
      );
    }
  }
}



export default RedditComponent;
