// reactjs tutorial - 33
// this concept is about Higher Functionality
// it's making sure to re-use the code and not duplicating it
// at the moment the code about counting hover-overs and clicks is duplicated
// the task now is to reuse the same code and also save time.

import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    // destructuring count and incrementCount from this.props
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Clicked {count} times</button>
      </div>
    );
  }
}

export default withCounter(ClickCounter);
