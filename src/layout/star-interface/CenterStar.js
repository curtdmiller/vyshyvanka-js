import React from "react";
import * as Tone from "tone";
import { AppContext } from "../../app-context";
import Line from "../../components/shapes/Line";
import { colors } from "../../theme/colors";

const monoSettings = {
  oscillator: { type: "sawtooth" },
  envelope: { attack: 0.001, decay: 0.1, release: 0.5, sustain: 0.5 },
  filter: {
    Q: 1,
    rolloff: -12,
    type: "lowpass"
  },
  filterEnvelope: {
    attack: 0.4,
    baseFrequency: 150,
    decay: 0.2,
    exponent: 2,
    octaves: 3,
    release: 2,
    sustain: 0.5
  },
  volume: -12
};

export default function CenterStar() {
  const { pitchShift, delay, reverb, volume } = React.useContext(AppContext);
  const synthUp = React.useRef(
    new Tone.MonoSynth(monoSettings).chain(pitchShift, delay, reverb, volume)
  );
  const patternUp = new Tone.Pattern(
    function (time, note) {
      synthUp.current.triggerAttackRelease(note, 0.1, time);
    },
    ["D4", "F4", "G4", "A4", "458", "C4"],
    "up"
  );
  const synthDown = React.useRef(
    new Tone.MonoSynth(monoSettings).chain(pitchShift, delay, reverb, volume)
  );
  var patternDown = new Tone.Pattern(
    function (time, note) {
      synthDown.current.triggerAttackRelease(note, 0.1, time);
    },
    ["C4", "D4", "E4", "G4", "A4", "458"],
    "down"
  );

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
