// this is the higher order component
import React from "react";

// HOC component is the withCounter component
// original component is the WrappedComponent

// incrementCounter is the second parameter that is passed to the withCounter
// this is needed when we are passing arguments from the wrapped component to the HOC
// in this case we want different counter size for different components
// one will increment by 5 the second one with 10 or whatever number we want.
const withCounter = (WrappedComponent, incrementCount) => {
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
        return { count: prevState.count + incrementCount };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          //   we need the spread operator to pass the props from the App to the rest of the components
          // existing HOC is the reason why we need this because initially HOC takes over the props
          // we always need to pass down the props from HOC to the wrapped components
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
