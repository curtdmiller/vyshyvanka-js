import React from "react";
import * as Tone from "tone";
import { AppContext } from "../../app-context";
import Single from "../../components/shapes/Single";
import Square from "../../components/shapes/Square";
import { colors } from "../../theme/colors";

const synthA = new Tone.FMSynth({ portamento: 0.05, volume: -16 });
const synthB = new Tone.AMSynth({ portamento: 0.05, volume: -12 });
const synthC = new Tone.Synth({ portamento: 0.05, volume: -16 });

export default function InnerSquare() {
  const { pitchShift, delay, reverb, distortion, volume } = React.useContext(
    AppContext
  );
  const [selected, setSelected] = React.useState(false);
  let beat = 0;

  React.useEffect(() => {
    synthA.chain(pitchShift, distortion, delay, reverb, volume);
    synthB.chain(pitchShift, distortion, delay, reverb, volume);
    synthC.chain(pitchShift, distortion, delay, reverb, volume);
  }, []);

  const loop = React.useRef(
    new Tone.Loop({
      callback: (time) => {
        if (beat % 2 == 0) {
          synthA.triggerAttackRelease("C#4", "8n", time);
          synthC.triggerAttackRelease("F#4", "8n", time);
        }
        if (beat % 2 == 1) {
          synthB.triggerAttackRelease("G#4", "8n", time);
        }
        beat++;
      },
      interval: "8n",
      playbackRate: 0.75
    })
  );

  React.useEffect(() => {
    if (selected) {
      loop.current.start(0);
    } else {
      loop.current.stop(0);
    }
    return () => loop.current.stop(0);
  }, [selected]);

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
