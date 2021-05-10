import CellGroup from "../CellGroup";
import React from "react";

export function RightTriangle({ orientation, sideLength, fill, x, y }) {
  function generateMatrix(orientation) {
    switch (orientation) {
      case "NE":
        return Array.from(Array(sideLength), (_, i) =>
          Array.from(Array(sideLength), (_, j) => (j <= i ? fill : null))
        );
      case "SE":
        return Array.from(Array(sideLength), (_, i) =>
          Array.from(Array(sideLength), (_, j) =>
            j <= sideLength - 1 - i ? fill : null
          )
        );
      case "SW":
        return Array.from(Array(sideLength), (_, i) =>
          Array.from(Array(sideLength), (_, j) => (j >= i ? fill : null))
        );
      case "NW":
        return Array.from(Array(sideLength), (_, i) =>
          Array.from(Array(sideLength), (_, j) =>
            j >= sideLength - 1 - i ? fill : null
          )
        );
      default:
        return [];
    }
  }

  const matrix = generateMatrix(orientation);

  return <CellGroup matrix={matrix} x={x} y={y} />;
}
