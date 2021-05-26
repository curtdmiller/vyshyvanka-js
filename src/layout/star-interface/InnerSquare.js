import React from "react";
import * as Tone from "tone";
import { AppContext } from "../../app-context";
import Single from "../../components/shapes/Single";
import Square from "../../components/shapes/Square";
import { colors } from "../../theme/colors";

export default function InnerSquare() {
  const [selected, setSelected] = React.useState(false);

  // React.useEffect(() => {
  //   if (selected) {
  //   } else {
  //   }
  // }, [selected]);

  return (
    <g>
      <Square
        width={3}
        x={17}
        y={17}
        stroke={colors.yellow}
        selected={selected}
        setSelected={setSelected}
      />
      <Single
        x={18}
        y={18}
        stroke={colors.gray}
        selected={selected}
        setSelected={setSelected}
      />
    </g>
  );
}
