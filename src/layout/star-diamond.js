import React from "react";
import Fabric from "../components/Fabric";
import Diamond from "../components/shapes/Diamond";
import { colors } from "../theme/colors";
import OuterTriangles from "./star-interface/OuterTriangles";
import InnerTriangles from "./star-interface/InnerTriangles";
import OuterDiamonds from "./star-interface/OuterDiamonds";
import CornerStars from "./star-interface/CornerStars";
import CenterStar from "./star-interface/CenterStar";

export default function StarDiamond() {
  return (
    <Fabric gridSize={[37, 37]}>
      <OuterTriangles />
      <OuterDiamonds />
      <InnerTriangles />
      <CenterStar />
      <Diamond diameter={25} cx={18} cy={18} stroke={colors.orange} />
      <CornerStars />
    </Fabric>
  );
}
