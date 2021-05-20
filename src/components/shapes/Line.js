import React from "react";
import CellGroup from "../CellGroup";
import ShapeBase from "./ShapeBase";

export default function Line({ length, angle, color, x, y }) {
  const [matrix, setMatrix] = React.useState();
  const [stitches, setStitches] = React.useState();

  React.useEffect(() => {
    const tempStitches = [];
    if (angle === "vertical") {
      for (let i = 0; i < length; i++) {
        tempStitches.push({ fill: color, x: 0, y: i });
      }
    } else if (angle === "horizontal") {
      for (let i = 0; i < length; i++) {
        tempStitches.push({ fill: color, x: i, y: 0 });
      }
    } else if (angle === "diagonal-up") {
      for (let i = 0; i < length; i++) {
        tempStitches.push({ fill: color, x: i, y: i });
      }
    } else if (angle === "diagonal-down") {
      for (let i = 0; i < length; i++) {
        tempStitches.push({ fill: color, x: i, y: length - i - 1 });
      }
    }
    setStitches(tempStitches);
  }, [length, angle, color]);

  return stitches ? <ShapeBase stitches={stitches} x={x} y={y} /> : <g></g>;
}
