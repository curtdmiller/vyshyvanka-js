import CellGroup from "../CellGroup";
import React from "react";

export function RightTriangle({
  orientation,
  sideLength,
  colorA,
  colorB,
  x,
  y
}) {
  function generateMatrix(orientation) {
    switch (orientation) {
      case "NE":
        return Array.from(Array(sideLength), (_, i) =>
          Array.from(Array(sideLength), (_, j) => (j <= i ? colorA : colorB))
        );
      case "SE":
        return Array.from(Array(sideLength), (_, i) =>
          Array.from(Array(sideLength), (_, j) =>
            j <= sideLength - 1 - i ? colorA : colorB
          )
        );
      case "SW":
        return Array.from(Array(sideLength), (_, i) =>
          Array.from(Array(sideLength), (_, j) => (j >= i ? colorA : colorB))
        );
      case "NW":
        return Array.from(Array(sideLength), (_, i) =>
          Array.from(Array(sideLength), (_, j) =>
            j >= sideLength - 1 - i ? colorA : colorB
          )
        );
      default:
        return [];
    }
  }

  const matrix = generateMatrix(orientation);

  return <CellGroup matrix={matrix} x={x} y={y} />;
}
