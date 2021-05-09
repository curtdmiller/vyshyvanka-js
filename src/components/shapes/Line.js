import React from "react";
import CellGroup from "../CellGroup";

export default function Line({ length, angle, color, x, y }) {
  const [matrix, setMatrix] = React.useState();

  React.useEffect(() => {
    if (angle === "vertical") {
      setMatrix(
        Array.from(Array(length), (_, i) =>
          Array.from(Array(1), (_, j) => color)
        )
      );
    } else if (angle === "horizontal") {
      setMatrix(
        Array.from(Array(1), (_, i) =>
          Array.from(Array(length), (_, j) => color)
        )
      );
    } else if (angle === "diagonal-up") {
      setMatrix(
        Array.from(Array(length), (_, i) =>
          Array.from(Array(length), (_, j) =>
            length - i - 1 === j ? color : null
          )
        )
      );
    } else if (angle === "diagonal-down") {
      setMatrix(
        Array.from(Array(length), (_, i) =>
          Array.from(Array(length), (_, j) => (i === j ? color : null))
        )
      );
    }
  }, [length, angle, color]);

  return matrix ? <CellGroup matrix={matrix} x={x} y={y} /> : <g></g>;
}
