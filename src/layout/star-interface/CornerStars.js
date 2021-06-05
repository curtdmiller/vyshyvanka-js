import * as React from "react";
import { AppContext } from "../../App";
import Diamond from "../../components/shapes/Diamond";
import Single from "../../components/shapes/Single";
import Square from "../../components/shapes/Square";
import { colors } from "../../theme/colors";
import { StarContext } from "../star-diamond";

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
  const { pitchShiftPitch, setPitchShiftPitch, setDelayMute, setReverbMute } =
    React.useContext(StarContext);
  const [selectedWest, setSelectedWest] = React.useState(false);
  const [selectedEast, setSelectedEast] = React.useState(false);
  const [selectedNorth, setSelectedNorth] = React.useState(false);
  const [selectedSouth, setSelectedSouth] = React.useState(false);

  function resetClickHandler() {
    setPitchShiftPitch(0);
    setSelectedWest(false);
    setSelectedEast(false);
  }

  React.useEffect(() => {
    setDelayMute(!selectedWest);
  }, [selectedWest]);
  React.useEffect(() => {
    setReverbMute(!selectedEast);
  }, [selectedEast]);
  function northClickHandler(e) {
    if (!e.shiftKey) {
      setPitchShiftPitch(pitchShiftPitch + 1);
    }
  }
  function southClickHandler(e) {
    if (!e.shiftKey) {
      setPitchShiftPitch(pitchShiftPitch - 1);
    }
  }
  React.useEffect(() => {
    if (pitchShiftPitch > 0) {
      setSelectedNorth(true);
      setSelectedSouth(false);
    } else if (pitchShiftPitch < 0) {
      setSelectedNorth(false);
      setSelectedSouth(true);
    } else {
      setSelectedNorth(false);
      setSelectedSouth(false);
    }
  }, [pitchShiftPitch]);

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
      <g onClick={resetClickHandler}>
        <Square width={3} x={17} y={17} stroke={colors.yellow} />
        <Single x={18} y={18} stroke={colors.gray} />
      </g>
    </g>
  );
}
