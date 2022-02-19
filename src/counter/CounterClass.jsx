import { Button } from "@mui/material";
import React, { Component } from "react";

export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleDecrement() {
    this.setState({ count: this.state.count - 1 });
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        {this.state.count}
        <div>
          <Button
            onClick={this.handleIncrement}
            color="primary"
            variant="contained"
          >
            Increment
          </Button>
          <Button
            onClick={this.handleDecrement.bind(this)}
            color="primary"
            variant="contained"
          >
            Decrement
          </Button>
        </div>
      </>
    );
  }
}
