import CellGroup from "../CellGroup";
import React from "react";

export default function Plus({ diameter, lineWidth, stroke, x, y }) {
  const matrix = Array.from(Array(diameter), (_, i) =>
    Array.from(Array(diameter), (_, j) =>
      (i >= Math.floor((diameter - lineWidth) / 2) &&
        i < Math.floor(diameter - (diameter - lineWidth) / 2)) ||
      (j >= Math.floor((diameter - lineWidth) / 2) &&
        j < Math.floor(diameter - (diameter - lineWidth) / 2))
        ? stroke
        : null
    )
  );

  return <CellGroup matrix={matrix} x={x} y={y} />;
}
