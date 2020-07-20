import React, { Component } from "react";
import { Cell } from "../cell/cell.component";
import "./board.component.css";
export class Board extends Component {
  componentName = "Checker Board";
  constructor() {
    super();
    this.state = {};
  }
  // anytime the form value changes we update the state.
  onChange = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.rows.value);
    const cells = e.currentTarget.rows.value;
    this.setState({ cells, cell_count: cells * cells, build: false });
  };
  // push all the cells in an array to prepare for render.
  buildCells = (e) => {
    e.preventDefault();
    const cell_count = this.state.cell_count;
    let allCells = [];
    let id = 1;
    let color = "black";
    while (id <= cell_count) {
      if (allCells.length - 1 !== this.state.cells) {
        allCells.push(<Cell key={id} color={color} />);
      } else {
        allCells.push(
          <>
            <Cell key={id} color={color} />
            <hr />
          </>
        );
      }
      color = color === "black" ? "white" : "black";
      id += 1;
    }
    this.setState({ build: true, allCells });
  };
  // render all the cells, call this in the JSX.
  // if this.state.allCells exists and build is set to true
  renderCells = () => {
    if (
      this.state.allCells &&
      this.state.allCells.length > 0 &&
      this.state.build
    ) {
      return this.state.allCells.map((cell) => cell);
    } else {
      return <h4> No Cells </h4>;
    }
  };
  render = () => {
    // the width of the board is defined by base input * ind div width.
    return (
      <div>
        <h1> {this.componentName} </h1>
        <form type="submit" onChange={this.onChange} onSubmit={this.buildCells}>
          <label> How many rows? </label>
          <input type="number" name="rows" />
          <button type="submit">build</button>
        </form>
        <Cell />
        <div id="board" style={{ width: this.state.cells * 100 }}>
          {this.renderCells()}
        </div>
      </div>
    );
  };
}
