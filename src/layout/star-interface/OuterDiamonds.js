import * as React from "react";
import Diamond from "../../components/shapes/Diamond";
import { colors } from "../../theme/colors";

export default function OuterDiamonds() {
  const [selectedGreen, setSelectedGreen] = React.useState(false);
  const [selectedBlack, setSelectedBlack] = React.useState(false);
  return (
    <g>
      <Diamond
        diameter={37}
        cx={18}
        cy={18}
        stroke={colors.darkGreen}
        selected={selectedGreen}
        setSelected={setSelectedGreen}
      />
      <Diamond
        diameter={35}
        cx={18}
        cy={18}
        stroke={colors.darkGreen}
        selected={selectedGreen}
        setSelected={setSelectedGreen}
      />
      <Diamond
        diameter={33}
        cx={18}
        cy={18}
        stroke={colors.darkGreen}
        selected={selectedGreen}
        setSelected={setSelectedGreen}
      />
      <Diamond
        diameter={31}
        cx={18}
        cy={18}
        stroke={colors.darkGreen}
        selected={selectedGreen}
        setSelected={setSelectedGreen}
      />
      <Diamond
        diameter={27}
        cx={18}
        cy={18}
        stroke={colors.darkGray}
        selected={selectedBlack}
        setSelected={setSelectedBlack}
      />
    </g>
  );
}
