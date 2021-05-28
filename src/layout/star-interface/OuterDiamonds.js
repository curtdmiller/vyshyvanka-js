import * as React from "react";
import * as Tone from "tone";
import { AppContext } from "../../app-context";
import Diamond from "../../components/shapes/Diamond";
import { colors } from "../../theme/colors";

export default function OuterDiamonds() {
  const { outerDiamondSynth } = React.useContext(AppContext);
  const [selectedGreen, setSelectedGreen] = React.useState(false);
  const { outerDiamondDelay } = React.useContext(AppContext);

  const sequence = new Tone.Sequence(
    (time, note) => {
      outerDiamondSynth.triggerAttackRelease(note, "16t", time);
    },
    ["D4", [null, "C3"], ["F4", "G4", "A4", "458"]],
    "4n"
  );
  const delaySequence = new Tone.Sequence(
    (time, delayTime) => {
      outerDiamondDelay.delayTime.rampTo(delayTime, 0.25, time);
    },
    ["4n", "8n", "16n"],
    "1n"
  );

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
