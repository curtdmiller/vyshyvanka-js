import * as React from "react";
import { AppContext } from "../../app-context";
import Diamond from "../../components/shapes/Diamond";
import Single from "../../components/shapes/Single";
import { colors } from "../../theme/colors";

function CornerStar({ cx, cy, selected, setSelected, clickHandler }) {
  return (
    <g onClick={clickHandler}>
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
  const { pitchShift, delay, reverb } = React.useContext(AppContext);
  const [selectedWest, setSelectedWest] = React.useState(false);
  const [selectedEast, setSelectedEast] = React.useState(false);
  const [selectedNorth, setSelectedNorth] = React.useState(false);
  const [selectedSouth, setSelectedSouth] = React.useState(false);
  const [currentPitchShift, setCurrentPitchShift] = React.useState(0);

  React.useEffect(() => {
    delay.wet.value = selectedWest ? 0 : 0.2;
  }, [selectedWest]);
  React.useEffect(() => {
    reverb.wet.value = selectedEast ? 0 : 1;
  }, [selectedEast]);
  console.log(reverb.wet.value);
  function northClickHandler(e) {
    setCurrentPitchShift(currentPitchShift + 1);
  }
  function southClickHandler(e) {
    setCurrentPitchShift(currentPitchShift - 1);
  }
  React.useEffect(() => {
    pitchShift.pitch = currentPitchShift;
    if (currentPitchShift > 0) {
      setSelectedNorth(true);
      setSelectedSouth(false);
    } else if (currentPitchShift < 0) {
      setSelectedNorth(false);
      setSelectedSouth(true);
    } else {
      setSelectedNorth(false);
      setSelectedSouth(false);
    }
  }, [currentPitchShift]);

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
        clickHandler={northClickHandler}
      />
      <CornerStar
        cx={18}
        cy={29}
        selected={selectedSouth}
        setSelected={setSelectedSouth}
        clickHandler={southClickHandler}
      />
    </g>
  );
}
