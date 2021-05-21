import * as React from "react";
import G from "../G";
import ShapeBase from "./ShapeBase";

export default function Diamond({
  diameter,
  stroke,
  fill,
  filled,
  cx,
  cy,
  selected,
  setSelected
}) {
  const [stitches, setStitches] = React.useState();
  const [realDiameter, setRealDiameter] = React.useState(
    diameter % 2 === 0 ? diameter - 1 : diameter
  );

  React.useEffect(() => {
    setRealDiameter(diameter % 2 === 0 ? diameter - 1 : diameter);
  }, [diameter]);

  React.useEffect(() => {
    const mid = (realDiameter - 1) / 2;
    const s = [];
    for (let x = 0; x < realDiameter; x++) {
      for (let y = 0; y < realDiameter; y++) {
        if (
          x === mid - y ||
          x === mid + y ||
          x === realDiameter - y + mid - 1 ||
          x === y + mid + 1 - realDiameter
        ) {
          s.push({ fill: stroke, x, y });
        }
      }
    }
    if (filled) {
      for (let x = 0; x < realDiameter; x++) {
        for (let y = 0; y < realDiameter; y++) {
          if (
            x >= mid - y &&
            x <= mid + y &&
            x >= y + mid + 1 - realDiameter &&
            x <= realDiameter - y + mid - 1
          ) {
            s.push({ fill, x, y });
          }
        }
      }
    }
    setStitches(s);
  }, [diameter, stroke, fill, filled]);

  return (
    <G x={cx} y={cy}>
      {stitches && (
        <ShapeBase
          stitches={stitches}
          x={-(realDiameter - 1) / 2}
          y={-(realDiameter - 1) / 2}
          selected={selected}
          setSelected={setSelected}
        />
      )}
    </G>
  );
}
