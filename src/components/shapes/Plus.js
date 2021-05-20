import CellGroup from "../CellGroup";
import React from "react";
import ShapeBase from "./ShapeBase";

// export default function Plus({ diameter, lineWidth, stroke, x, y }) {
//   const matrix = Array.from(Array(diameter), (_, i) =>
//     Array.from(Array(diameter), (_, j) =>
//       (i >= Math.floor((diameter - lineWidth) / 2) &&
//         i < Math.floor(diameter - (diameter - lineWidth) / 2)) ||
//       (j >= Math.floor((diameter - lineWidth) / 2) &&
//         j < Math.floor(diameter - (diameter - lineWidth) / 2))
//         ? stroke
//         : null
//     )
//   );

//   return <CellGroup matrix={matrix} x={x} y={y} />;
// }

export default function Plus({ diameter, lineWidth, stroke, x, y }) {
  const [stitches, setStitches] = React.useState([]);

  React.useEffect(() => {
    const tempStitches = [];

    for (let x = 0; x < diameter; x++) {
      for (let y = 0; y < diameter; y++) {
        if (
          (x >= Math.floor((diameter - lineWidth) / 2) &&
            x < Math.floor(diameter - (diameter - lineWidth) / 2)) ||
          (y >= Math.floor((diameter - lineWidth) / 2) &&
            y < Math.floor(diameter - (diameter - lineWidth) / 2))
        ) {
          tempStitches.push({ fill: stroke, x, y });
        }
      }
    }
    setStitches(tempStitches);
  }, [diameter, lineWidth]);

  return <ShapeBase stitches={stitches} x={x} y={y} />;
}
