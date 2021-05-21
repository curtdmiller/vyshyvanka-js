import * as React from "react";
import G from "../G";
import Stitch from "../Stitch";

export default function Single({ fill, x, y, selected, setSelected }) {
  function clickHandler(event) {
    if (event.shiftKey && setSelected && selected != null) {
      setSelected(!selected);
    }
  }

  return (
    <G fillOpacity={selected ? 0.5 : 1} onClick={clickHandler}>
      <Stitch fill={fill} x={x} y={y} />
    </G>
  );
}
