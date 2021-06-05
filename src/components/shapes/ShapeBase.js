import * as React from "react";
import { AppContext } from "../../App";
import G from "../G";

export default function ShapeBase({ stitches, x, y, selected, setSelected }) {
  const { cellSize, selectFill } = React.useContext(AppContext);
  const [stitchState, setStitchState] = React.useState(
    stitches.map((stitch) => ({
      ...stitch,
      selected: false,
      originalFill: stitch.fill
    }))
  );

  React.useEffect(() => {
    setStitchState(
      stitches.map((stitch) => ({
        ...stitch,
        selected: false,
        originalFill: stitch.fill
      }))
    );
  }, [stitches]);

  function shapeClickHandler(event) {
    if (!event.shiftKey && setSelected && selected != null) {
      setSelected(!selected);
    }
  }

  function stitchClickHandler(event) {
    if (event.shiftKey) {
      const newStitches = [...stitchState];
      const cur = newStitches[event.currentTarget.dataset.id];
      cur.selected = !cur.selected;
      cur.fill = cur.selected ? selectFill : cur.originalFill;
      setStitchState(newStitches);
    }
  }

  return (
    <G x={x} y={y} fillOpacity={selected ? 0.5 : 1} onClick={shapeClickHandler}>
      {stitchState.map((stitch, i) => (
        <rect
          width={cellSize}
          height={cellSize}
          fill={stitch.fill}
          x={stitch.x * cellSize + 0.5}
          y={stitch.y * cellSize + 0.5}
          onClick={stitchClickHandler}
          data-id={i}
          key={`stitch-${i}`}
        />
      ))}
    </G>
  );
}
