// this is the higher order component
import React from "react";

// HOC component is the withCounter component
// original component is the WrappedComponent
const withCounter = WrappedComponent => {
  // following the naming convention this will be WithCounter component
  // the newComponent that is returned, after HOC takes in the original component,
  // newComponent = WithCounter
  class WithCounter extends React.Component {
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
        return { count: prevState.count + 1 };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
