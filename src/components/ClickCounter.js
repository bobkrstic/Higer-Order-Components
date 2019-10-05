// reactjs tutorial - 33
// this concept is about Higher Functionality
// it's making sure to re-use the code and not duplicating it
// at the moment the code about counting hover-overs and clicks is duplicated
// the task now is to reuse the same code and also save time.

import React, { Component } from "react";

class ClickCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    // the argument of the setState function will not be a simple state object
    // but instead it will be a function
    // this is a function that takes a parameter previous state
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.incrementCount}>Clicked {count} times</button>
      </div>
    );
  }
}

export default ClickCounter;
