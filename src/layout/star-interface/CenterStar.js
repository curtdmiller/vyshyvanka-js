import React from "react";
import * as Tone from "tone";
import { AppContext } from "../../app-context";
import Line from "../../components/shapes/Line";
import { colors } from "../../theme/colors";

export default function CenterStar() {
  const {
    ascLineSynth,
    descLineSynth,
    verticalLineSynth,
    horizontalLineSynth
  } = React.useContext(AppContext);
  const patternUp = new Tone.Pattern(
    function (time, note) {
      ascLineSynth.triggerAttackRelease(note, 0.1, time);
    },
    ["D4", "F4", "G4", "A4", "458", "C4"],
    "up"
  );
  var patternDown = new Tone.Pattern(
    function (time, note) {
      descLineSynth.triggerAttackRelease(note, 0.1, time);
    },
    ["C4", "D4", "E4", "G4", "A4", "458"],
    "down"
  );
  var verticalPattern = new Tone.Pattern({
    callback: function (time, note) {
      verticalLineSynth.triggerAttackRelease(note, 0.8);
    },
    values: ["D4", "F4", "A4", "458"],
    pattern: "random",
    playbackRate: 0.25
  });
  var horizontalPattern = new Tone.Pattern({
    callback: function (time, note) {
      horizontalLineSynth.triggerAttackRelease(note, 0.8);
    },
    values: ["D4", "F4", "A4", "458"],
    pattern: "random",
    playbackRate: 0.25
  });

  const [horizontalSelected, setHorizontalSelected] = React.useState(false);
  const [verticalSelected, setVerticalSelected] = React.useState(false);
  const [downSelected, setDownSelected] = React.useState(false);
  const [upSelected, setUpSelected] = React.useState(false);

  React.useEffect(() => {
    downSelected ? patternDown.start(0) : patternDown.stop(0);
    return () => patternDown.stop(0);
  }, [downSelected]);

  React.useEffect(() => {
    upSelected ? patternUp.start(0) : patternUp.stop(0);
    return () => patternUp.stop(0);
  }, [upSelected]);

  React.useEffect(() => {
    verticalSelected ? verticalPattern.start(0) : verticalPattern.stop(0);
    return () => verticalPattern.stop(0);
  }, [verticalSelected]);

  React.useEffect(() => {
    horizontalSelected ? horizontalPattern.start(0) : horizontalPattern.stop(0);
    return () => horizontalPattern.stop(0);
  }, [horizontalSelected]);
  return (
    <g>
      <Line
        length={17}
        angle="horizontal"
        color={colors.orange}
        x={10}
        y={18}
        selected={horizontalSelected}
        setSelected={setHorizontalSelected}
      />
      <Line
        length={17}
        angle="vertical"
        color={colors.orange}
        x={18}
        y={10}
        selected={verticalSelected}
        setSelected={setVerticalSelected}
      />
      <Line
        length={11}
        angle="diagonal-down"
        color={colors.orange}
        x={13}
        y={13}
        selected={downSelected}
        setSelected={setDownSelected}
      />
      <Line
        length={11}
        angle="diagonal-up"
        color={colors.orange}
        x={13}
        y={13}
        selected={upSelected}
        setSelected={setUpSelected}
      />
    </g>
  );
}
