import * as React from "react";
import Diamond from "../../components/shapes/Diamond";
import Single from "../../components/shapes/Single";
import { colors } from "../../theme/colors";

function CornerStar({ cx, cy, selected, setSelected }) {
  return (
    <g>
      <Diamond
        diameter={5}
        cx={cx}
        cy={cy}
        stroke={colors.gray}
        fill={colors.gray}
        filled
        selected={selected}
        setSelected={setSelected}
      />
      <Single
        x={cx}
        y={cy}
        fill={colors.yellow}
        selected={selected}
        setSelected={setSelected}
      />
    </g>
  );
}

export default function CornerStars() {
  const [selectedWest, setSelectedWest] = React.useState(false);
  const [selectedEast, setSelectedEast] = React.useState(false);
  const [selectedNorth, setSelectedNorth] = React.useState(false);
  const [selectedSouth, setSelectedSouth] = React.useState(false);
  return (
    <g>
      <CornerStar
        cx={7}
        cy={18}
        selected={selectedWest}
        setSelected={setSelectedWest}
      />
      <CornerStar
        cx={29}
        cy={18}
        selected={selectedEast}
        setSelected={setSelectedEast}
      />
      <CornerStar
        cx={18}
        cy={7}
        selected={selectedNorth}
        setSelected={setSelectedNorth}
      />
      <CornerStar
        cx={18}
        cy={29}
        selected={selectedSouth}
        setSelected={setSelectedSouth}
      />
    </g>
  );
}
