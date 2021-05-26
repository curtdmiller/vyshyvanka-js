import * as React from "react";
import * as Tone from "tone";
import { AppContext } from "../../app-context";
import { IsoTriangle } from "../../components/shapes/Triangles";
import { colors } from "../../theme/colors";

function TriangleGroup({ patternContent, patternDirection, triangles, synth }) {
  const [selected, setSelected] = React.useState(false);

  const pattern = React.useRef(
    new Tone.Pattern(
      function (time, note) {
        synth.triggerAttackRelease(note, "16n", time);
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
  const { nwQuadrantSynth, neQuadrantSynth, swQuadrantSynth, seQuadrantSynth } =
    React.useContext(AppContext);
  return (
    <g>
      <TriangleGroup
        patternContent={["D4", "F4", "D4"]}
        patternDirection="up"
        triangles={[
          { orientation: "north", size: 9, x: 8, y: 13 },
          { orientation: "west", size: 9, x: 13, y: 8 }
        ]}
        synth={nwQuadrantSynth}
      />
      <TriangleGroup
        patternContent={["D4", "E4", "Eb4", "E4", "D4"]}
        patternDirection="up"
        triangles={[
          { orientation: "east", size: 9, x: 19, y: 8 },
          { orientation: "north", size: 9, x: 20, y: 13 }
        ]}
        synth={neQuadrantSynth}
      />
      <TriangleGroup
        patternContent={["D4", "Eb4", "D4", "Eb4", "D4", "Eb4", "D4"]}
        patternDirection="down"
        triangles={[
          { orientation: "south", size: 9, x: 8, y: 19 },
          { orientation: "west", size: 9, x: 13, y: 20 }
        ]}
        synth={swQuadrantSynth}
      />
      <TriangleGroup
        patternContent={["D2"]}
        patternDirection="down"
        triangles={[
          { orientation: "east", size: 9, x: 19, y: 20 },
          { orientation: "south", size: 9, x: 20, y: 19 }
        ]}
        synth={seQuadrantSynth}
      />
    </g>
  );
}
