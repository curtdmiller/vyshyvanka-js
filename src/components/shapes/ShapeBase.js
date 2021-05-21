import * as React from "react";
import G from "../G";
import Stitch from "../Stitch";

export default function ShapeBase({ stitches, x, y, selected, setSelected }) {
  function clickHandler(event) {
    if (event.shiftKey && setSelected && selected != null) {
      setSelected(!selected);
    }
  }

  return (
    <G x={x} y={y} fillOpacity={selected ? 0.5 : 1} onClick={clickHandler}>
      {stitches.map((stitch, i) => (
        <Stitch
          fill={stitch.fill}
          x={stitch.x}
          y={stitch.y}
          key={`stitch-${i}`}
        />
      ))}
    </G>
  );
}
