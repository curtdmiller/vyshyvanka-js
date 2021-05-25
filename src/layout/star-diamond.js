import React from "react";
import Fabric from "../components/Fabric";
import Diamond from "../components/shapes/Diamond";
import { colors } from "../theme/colors";
import OuterTriangles from "./star-interface/OuterTriangles";
import InnerTriangles from "./star-interface/InnerTriangles";
import OuterDiamonds from "./star-interface/OuterDiamonds";
import CornerStars from "./star-interface/CornerStars";
import CenterStar from "./star-interface/CenterStar";
import InnerSquare from "./star-interface/InnerSquare";

export default function StarDiamond() {
  return (
    <Fabric gridSize={[37, 37]}>
      <OuterTriangles />
      <OuterDiamonds />
      <InnerTriangles />
      <CenterStar />
      {/* Inner Diamond */}
      <Diamond diameter={25} cx={18} cy={18} stroke={colors.orange} />
      <InnerSquare />
      <CornerStars />
    </Fabric>
  );
}
