import * as React from "react";
import * as Tone from "tone";
import { AppContext } from "../../App";
import Diamond from "../../components/shapes/Diamond";
import { colors } from "../../theme/colors";
import { StarContext } from "../star-diamond";

export default function OuterDiamonds() {
  const [selectedGreen, setSelectedGreen] = React.useState(false);
  const { diamondChannel } = React.useContext(StarContext);

  const gain = React.useMemo(
    () => new Tone.Gain(-12, "decibels").connect(Tone.Destination),
    []
  );

  const delay = React.useMemo(
    () =>
      new Tone.FeedbackDelay({
        maxDelay: 2,
        feedback: 0.5,
        wet: 0.2
      }).connect(gain),
    []
  );

  const synth = React.useMemo(
    () => new Tone.FMSynth({ volume: -9 }).chain(delay, diamondChannel),
    []
  );

  const sequence = React.useMemo(
    () =>
      new Tone.Sequence(
        (time, note) => {
          synth.triggerAttackRelease(note, "16t", time);
        },
        ["D4", ["F4", "G4", "A4", "458"]],
        "4n"
      ),
    []
  );
  const delaySequence = React.useMemo(
    () =>
      new Tone.Sequence(
        (time, delayTime) => {
          delay.delayTime.rampTo(delayTime, 0.25, time);
        },
        ["4n", "8n", "16n"],
        "1n"
      ),
    []
  );
  React.useEffect(() => {
    return () => {
      gain.dispose();
      delay.dispose();
      synth.dispose();
      sequence.dispose();
      delaySequence.dispose();
    };
  }, []);
  React.useEffect(() => {
    if (selectedGreen) {
      sequence.start(0);
      delaySequence.start(10);
    } else {
      sequence.stop(0);
      delaySequence.stop(0);
    }
    return () => sequence.stop(0);
  }, [selectedGreen]);
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
      <Diamond diameter={27} cx={18} cy={18} stroke={colors.darkGray} />
    </g>
  );
}
