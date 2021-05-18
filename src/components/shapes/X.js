import * as React from "react";
import G from "../G";
import Stitch from "../Stitch";

export default function X({ width, fill, x, y }) {
  const [stitches, setStitches] = React.useState([]);
  const [selected, setSelected] = React.useState(false);

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

  function clickHandler(event) {
    if (event.shiftKey) {
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
