import * as React from "react";
import * as Tone from "tone";
import { AppContext } from "../../app-context";
import { IsoTriangle } from "../../components/shapes/Triangles";
import { colors } from "../../theme/colors";

const defaultFMSettings = {
  oscillator: {
    type: "sine"
  },
  modulationIndex: 20,
  modulation: {
    type: "sawtooth"
  },
  envelope: {
    attack: 0.01,
    decay: 0.2,
    sustain: 0.2,
    release: 2,
    attackCurve: "sine"
  },
  volume: -12
};

function TriangleGroup({ patternContent, patternDirection, triangles }) {
  const { pitchShift, delay, reverb, volume } = React.useContext(AppContext);
  const [selected, setSelected] = React.useState(false);
  const synth = React.useRef(
    new Tone.FMSynth(defaultFMSettings).chain(pitchShift, delay, reverb, volume)
  );

  const pattern = React.useRef(
    new Tone.Pattern(
      function (time, note) {
        synth.current.triggerAttackRelease(note, "16n", time);
      },
      patternContent,
      patternDirection
    )
  );

  React.useEffect(() => {
    if (selected) {
      pattern.current.start(0);
    } else {
      pattern.current.stop(0);
    }
    return () => pattern.current.stop(0);
  }, [selected]);

  return triangles.map((triangle) => (
    <IsoTriangle
      orientation={triangle.orientation}
      size={triangle.size}
      fill={colors.red}
      x={triangle.x}
      y={triangle.y}
      selected={selected}
      setSelected={setSelected}
      key={`tri-${triangle.orientation}-${triangle.x}-${triangle.y}`}
    />
  ));
}

export default function InnerTriangles() {
  return (
    <g>
      <TriangleGroup
        patternContent={["D4", "F4", "D4"]}
        patternDirection="up"
        triangles={[
          { orientation: "north", size: 9, x: 8, y: 13 },
          { orientation: "west", size: 9, x: 13, y: 8 }
        ]}
      />
      <TriangleGroup
        patternContent={["D4", "E4", "Eb4", "E4", "D4"]}
        patternDirection="up"
        triangles={[
          { orientation: "east", size: 9, x: 19, y: 8 },
          { orientation: "north", size: 9, x: 20, y: 13 }
        ]}
      />
      <TriangleGroup
        patternContent={["D4", "Eb4", "D4", "Eb4", "D4", "Eb4", "D4"]}
        patternDirection="down"
        triangles={[
          { orientation: "south", size: 9, x: 8, y: 19 },
          { orientation: "west", size: 9, x: 13, y: 20 }
        ]}
      />
      <TriangleGroup
        patternContent={["D2"]}
        patternDirection="down"
        triangles={[
          { orientation: "east", size: 9, x: 19, y: 20 },
          { orientation: "south", size: 9, x: 20, y: 19 }
        ]}
      />
    </g>
  );
}
