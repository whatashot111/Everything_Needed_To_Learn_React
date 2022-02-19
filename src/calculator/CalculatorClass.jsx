import { evaluate } from "mathjs";
import { Component } from "react";
import "./css/calculator.css";

export default class Calculator extends Component {
  state = {
    expression: "",
  };

  handleClick = (event) => {
    const value = event.target.innerText;
    const currentExpression = this.state.expression;
    const lastChar = currentExpression[currentExpression.length - 1];

    if (
      ["+", "-", "*", "/", "."].includes(lastChar) &&
      ["+", "-", "*", "/", "."].includes(value)
    ) {
      return;
    }

    this.setState({
      expression: currentExpression + value,
    });
  };

  handleClear = () => {
    this.setState({ expression: "" });
  };

  handleEvaluate = () => {
    this.setState({ expression: evaluate(this.state.expression) || "" });
  };

  render() {
    return (
      <div className="calc-container">
        <div className="calc-screen">
          <input
            id="screen-input"
            type="text"
            disabled
            value={this.state.expression}
          />
        </div>
        <div className="calc-buttons">
          <div className="row1">
            <button className="button" onClick={this.handleClick}>
              1
            </button>
            <button className="button" onClick={this.handleClick}>
              2
            </button>
            <button className="button" onClick={this.handleClick}>
              3
            </button>
            <button className="button" onClick={this.handleClick}>
              4
            </button>
            <button className="button" onClick={this.handleClick}>
              5
            </button>
          </div>
          <div className="row2">
            <button className="button" onClick={this.handleClick}>
              6
            </button>
            <button className="button" onClick={this.handleClick}>
              7
            </button>
            <button className="button" onClick={this.handleClick}>
              8
            </button>
            <button className="button" onClick={this.handleClick}>
              9
            </button>
            <button className="button" onClick={this.handleClick}>
              0
            </button>
          </div>
          <div className="row3">
            <button className="button" onClick={this.handleClick}>
              +
            </button>
            <button className="button" onClick={this.handleClick}>
              -
            </button>
            <button className="button" onClick={this.handleClick}>
              *
            </button>
            <button className="button" onClick={this.handleClick}>
              /
            </button>
            <button className="button" onClick={this.handleClick}>
              .
            </button>
          </div>
          <div className="row4">
            <button className="button" onClick={this.handleClear}>
              C
            </button>
            <button className="button" onClick={this.handleEvaluate}>
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}
