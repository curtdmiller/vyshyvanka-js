import * as React from "react";
import { AppContext } from "../App";

export default function Stitch({ fill, x, y }) {
  const [selected, setSelected] = React.useState(false);
  const [currentFill, setCurrentFill] = React.useState(fill);
  const { cellSize, selectFill, setSelectFill } = React.useContext(AppContext);

  React.useEffect(() => {
    if (selected) {
      setCurrentFill(selectFill);
    } else {
      setCurrentFill(fill);
    }
  }, [selected]);

  function handleClick(event) {
    if (!event.shiftKey) {
      setSelected(!selected);
    }
  }

  return (
    <rect
      width={cellSize}
      height={cellSize}
      fill={currentFill}
      x={x * cellSize}
      y={y * cellSize}
      onClick={(event) => handleClick(event)}
    />
  );
}
