import * as React from "react";
import ShapeBase from "./ShapeBase";

export default function X({ width, fill, x, y, selected, setSelected }) {
  const [stitches, setStitches] = React.useState([]);

  React.useEffect(() => {
    const tempStitches = [];
    for (let i = 0; i < width; i++) {
      tempStitches.push({ fill: fill, x: i, y: i });
      tempStitches.push({ fill: fill, x: width - i - 1, y: i });
    }
    setStitches(
      tempStitches.filter(
        (stitch, index, arr) =>
          index == arr.findIndex((s) => stitch.x == s.x && stitch.y == s.y)
      )
    );
  }, [width]);

  return (
    <ShapeBase
      stitches={stitches}
      x={x}
      y={y}
      selected={selected}
      setSelected={setSelected}
    />
  );
}
