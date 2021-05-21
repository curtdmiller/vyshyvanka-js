import * as React from "react";
import { IsoTriangle } from "../../components/shapes/Triangles";
import { colors } from "../../theme/colors";

export default function InnerTriangles() {
  const [selectedTopLeft, setSelectedTopLeft] = React.useState(false);
  const [selectedTopRight, setSelectedTopRight] = React.useState(false);
  const [selectedBottomRight, setSelectedBottomRight] = React.useState(false);
  const [selectedBottomLeft, setSelectedBottomLeft] = React.useState(false);

  return (
    <g>
      <IsoTriangle
        orientation="north"
        size={9}
        fill={colors.red}
        x={8}
        y={13}
        selected={selectedTopLeft}
        setSelected={setSelectedTopLeft}
      />
      <IsoTriangle
        orientation="west"
        size={9}
        fill={colors.red}
        x={13}
        y={8}
        selected={selectedTopLeft}
        setSelected={setSelectedTopLeft}
      />
      <IsoTriangle
        orientation="east"
        size={9}
        fill={colors.red}
        x={19}
        y={8}
        selected={selectedTopRight}
        setSelected={setSelectedTopRight}
      />
      <IsoTriangle
        orientation="north"
        size={9}
        fill={colors.red}
        x={20}
        y={13}
        selected={selectedTopRight}
        setSelected={setSelectedTopRight}
      />
      <IsoTriangle
        orientation="south"
        size={9}
        fill={colors.red}
        x={8}
        y={19}
        selected={selectedBottomRight}
        setSelected={setSelectedBottomRight}
      />
      <IsoTriangle
        orientation="west"
        size={9}
        fill={colors.red}
        x={13}
        y={20}
        selected={selectedBottomRight}
        setSelected={setSelectedBottomRight}
      />
      <IsoTriangle
        orientation="east"
        size={9}
        fill={colors.red}
        x={19}
        y={20}
        selected={selectedBottomLeft}
        setSelected={setSelectedBottomLeft}
      />
      <IsoTriangle
        orientation="south"
        size={9}
        fill={colors.red}
        x={20}
        y={19}
        selected={selectedBottomLeft}
        setSelected={setSelectedBottomLeft}
      />
    </g>
  );
}
