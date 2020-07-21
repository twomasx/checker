import React, { Component } from "react";
import "./cell.component.css";
import Piece from "./piece/piece.component";
export class Cell extends Component {
  constructor(props) {
    super(props);
  }
  // renders an individual cell
  render = () => {
    const { color, pieceColor, display } = this.props;
    if (display) {
      return (
        <div style={{ backgroundColor: color }} className="cell">
          <Piece shape="square" color={pieceColor}></Piece>
        </div>
      );
    } else {
      return <div style={{ backgroundColor: color }} className="cell"></div>;
    }
  };
}
