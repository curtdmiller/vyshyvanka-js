import * as React from "react";
import G from "../G";
import Stitch from "../Stitch";

export default function ShapeBase({ stitches, x, y, selected, setSelected }) {
  const [stitchState, setStitchState] = React.useState(
    stitches.map((stitch) => ({ ...stitch, selected: false }))
  );

  React.useEffect(() => {
    setStitchState(stitches.map((stitch) => ({ ...stitch, selected: false })));
  }, [stitches]);

  function shapeClickHandler(event) {
    if (event.shiftKey && setSelected && selected != null) {
      setSelected(!selected);
    }
  }

  function stitchClickHandler(event) {
    if (!event.shiftKey) {
      const newStitches = [...stitchState];
      const id = event.currentTarget.dataset.id;
      newStitches[id].selected = !newStitches[id].selected;
      setStitchState(newStitches);
    }
  }

  return (
    <G x={x} y={y} fillOpacity={selected ? 0.5 : 1} onClick={shapeClickHandler}>
      {stitchState.map((stitch, i) => (
        <Stitch
          fill={stitch.fill}
          x={stitch.x}
          y={stitch.y}
          selected={stitch.selected}
          handleClick={stitchClickHandler}
          id={i}
          key={`stitch-${i}`}
        />
      ))}
    </G>
  );
}
