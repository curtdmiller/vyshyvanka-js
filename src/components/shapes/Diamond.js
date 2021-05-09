import * as React from "react";
import CellGroup from "../CellGroup";
import G from "../G";

export default function Diamond({ diameter, stroke, fill, filled, cx, cy }) {
  const d = diameter % 2 === 0 ? diameter - 1 : diameter;
  const mid = (d - 1) / 2;
  const matrix = filled
    ? [...Array(d)].map((_, y) =>
        [...Array(d)].map((_, x) => {
          if (
            x >= mid - y &&
            x <= mid + y &&
            x >= y + mid + 1 - d &&
            x <= d - y + mid - 1
          ) {
            return fill;
          }
          return null;
        })
      )
    : [...Array(d)].map((_, y) =>
        [...Array(d)].map((_, x) => {
          if (
            x === mid - y ||
            x === mid + y ||
            x === d - y + mid - 1 ||
            x === y + mid + 1 - d
          ) {
            return stroke;
          }
          return null;
        })
      );

  return (
    <G x={cx} y={cy}>
      <CellGroup matrix={matrix} x={-(d - 1) / 2} y={-(d - 1) / 2} />
    </G>
  );
}
