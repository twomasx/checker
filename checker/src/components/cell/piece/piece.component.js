import React from "react";
import "./piece.component.css";
// create a piece to display inside a square on the board
const piece = ({ shape, color }) => {
  const borderRadius = shape === "circle" ? "50%" : "0%";
  const backgroundColor = color;
  return <div className="piece" style={{ borderRadius, backgroundColor }} />;
};
export default piece;
