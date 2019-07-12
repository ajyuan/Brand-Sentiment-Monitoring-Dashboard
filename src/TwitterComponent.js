import React from 'react';

class TwitterComponent extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    items: []
  };

  componentDidMount() {

    fetch("/twitter")
    .then(response => response.json())
    .then(result => {
      let twitterText = "";
      for (var i = 0; i < 100; i++) {
        if (result.statuses[i]) {
          twitterText += result.statuses[i]['text'];
        }
      }
      this.setState({
        isLoaded: true,
        items: result.statuses,
        aggregateItems: twitterText
      });
      console.log(twitterText);
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



export default TwitterComponent;
