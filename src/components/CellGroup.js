import React from "react";
import { AppContext } from "../App";
import G from "./G";
import Stitch from "./Stitch";

/**
 * ### Cell Group
 * Any shape, defined by a cellSize (the pixel width and height of the grid)
 * and a 2d matrix of color values representing the color of each cell.
 * @component
 * @param {Object} props
 * @param {number} props.cellSize - width and height of cell in pixels
 * @param {string[][]} props.matrix - 2d matrix of color values for each cell in the grid
 * @param {number} props.x - x transform in cells
 * @param {number} props.y - y transform in cells
 */
export default function CellGroup({ matrix, x, y }) {
  const { cellSize } = React.useContext(AppContext);
  const [opacity, setOpacity] = React.useState(1);
  function clickHandler(event) {
    if (event.shiftKey) {
      console.log("shifted");
    }
  }
  function mouseEnterHandler(event) {
    if (event.shiftKey) {
      setOpacity(0.5);
    }
  }
  function mouseLeaveHandler(event) {
    setOpacity(1);
  }
  return (
    <G
      x={x}
      y={y}
      fillOpacity={opacity}
      onClick={(event) => clickHandler(event)}
      onMouseEnter={(event) => mouseEnterHandler(event)}
      onMouseLeave={(event) => mouseLeaveHandler(event)}
    >
      {matrix.map((row, i) =>
        row.map((sq, j) => {
          if (sq) {
            return (
              <Stitch
                cellSize={cellSize}
                fill={sq}
                x={j}
                y={i}
                key={`${j}-${i}`}
              />
            );
          }
          return null;
        })
      )}
    </G>
  );
}
