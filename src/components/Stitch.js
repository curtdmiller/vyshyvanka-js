import * as React from "react";
import { AppContext } from "../app-context";

export default function Stitch({ fill, x, y, id, selected, handleClick }) {
  const [currentFill, setCurrentFill] = React.useState(fill);
  const { cellSize, selectFill } = React.useContext(AppContext);

  React.useEffect(() => {
    if (selected) {
      setCurrentFill(selectFill);
    } else {
      setCurrentFill(fill);
    }
  }, [selected]);

  return (
    <rect
      width={cellSize}
      height={cellSize}
      fill={currentFill}
      x={x * cellSize + 0.5}
      y={y * cellSize + 0.5}
      onClick={handleClick}
      data-id={id}
    />
  );
}
