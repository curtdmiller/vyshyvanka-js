import Fabric from "../components/Fabric";
import Diamond from "../components/shapes/Diamond";
import Square from "../components/shapes/Square";
import Star from "../components/shapes/Star";
import React from "react";
import Single from "../components/shapes/Single";
import { IsoTriangle, RightTriangle } from "../components/shapes/Triangles";

export default function StarDiamond2() {
  const colors = {
    darkGray: "#1f1300",
    gray: "#2A3338",
    red: "#CE675E",
    orange: "#FF8811",
    yellow: "#F4D06F",
    blue: "#1446a0",
    green: "#0A5A3F",
    offWhite: "#f2f7f2"
  };

  return (
    <Fabric gridSize={[37, 37]}>
      <RightTriangle
        orientation="SE"
        sideLength={16}
        fill={colors.gray}
        x={0}
        y={0}
      />
      <RightTriangle
        orientation="SW"
        sideLength={16}
        fill={colors.gray}
        x={21}
        y={0}
      />
      <RightTriangle
        orientation="NW"
        sideLength={16}
        fill={colors.gray}
        x={21}
        y={21}
      />
      <RightTriangle
        orientation="NE"
        sideLength={16}
        fill={colors.gray}
        x={0}
        y={21}
      />
      {/* outer diamonds */}
      <Diamond diameter={37} cx={18} cy={18} stroke={colors.green} />
      <Diamond diameter={35} cx={18} cy={18} stroke={colors.green} />
      <Diamond diameter={33} cx={18} cy={18} stroke={colors.green} />
      <Diamond diameter={31} cx={18} cy={18} stroke={colors.green} />
      <Diamond diameter={29} cx={18} cy={18} stroke={colors.offWhite} />
      <Diamond diameter={27} cx={18} cy={18} stroke={colors.darkGray} />

      <IsoTriangle
        orientation="north"
        size={9}
        fill={colors.red}
        x={8}
        y={13}
      />
      <IsoTriangle orientation="west" size={9} fill={colors.red} x={13} y={8} />
      <IsoTriangle orientation="east" size={9} fill={colors.red} x={19} y={8} />
      <IsoTriangle
        orientation="north"
        size={9}
        fill={colors.red}
        x={20}
        y={13}
      />

      <IsoTriangle
        orientation="south"
        size={9}
        fill={colors.red}
        x={8}
        y={19}
      />
      <IsoTriangle
        orientation="west"
        size={9}
        fill={colors.red}
        x={13}
        y={20}
      />
      <IsoTriangle
        orientation="east"
        size={9}
        fill={colors.red}
        x={19}
        y={20}
      />
      <IsoTriangle
        orientation="south"
        size={9}
        fill={colors.red}
        x={20}
        y={19}
      />

      {/* The Star */}
      <Star width={19} color={colors.orange} center={[18, 18]} />
      {/* Inner Diamond */}
      <Diamond diameter={25} cx={18} cy={18} stroke={colors.orange} />
      {/* Inner squares */}
      <Square width={3} x={17} y={17} stroke={colors.yellow} />
      <Single x={18} y={18} stroke={colors.gray} />

      {/* West Diamond */}
      <Diamond
        diameter={5}
        cx={7}
        cy={18}
        stroke={colors.gray}
        fill={colors.gray}
        filled
      />
      <Single x={7} y={18} fill={colors.yellow} />
      {/* East Diamond */}
      <Diamond
        diameter={5}
        cx={29}
        cy={18}
        stroke={colors.gray}
        fill={colors.gray}
        filled
      />
      <Single x={29} y={18} fill={colors.yellow} />

      {/* North Diamond */}
      <Diamond
        diameter={5}
        cx={18}
        cy={7}
        stroke={colors.gray}
        fill={colors.gray}
        filled
      />
      <Single x={18} y={7} fill={colors.yellow} />

      {/* South Diamond */}
      <Diamond
        diameter={5}
        cx={18}
        cy={29}
        stroke={colors.gray}
        fill={colors.gray}
        filled
      />
      <Single x={18} y={29} fill={colors.yellow} />
    </Fabric>
  );
}
