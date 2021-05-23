import Fabric from "../../components/Fabric";
import PlusStar from "../../components/shapes/PlusStar";
import React from "react";
import { AppContext } from "../../app-context";

export default function PlusStars() {
  const { cellSize } = React.useContext(AppContext);
  return (
    <Fabric cellSize={cellSize} gridSize={[21, 21]} backgroundColor="white">
      <g transform={`translate(${0 * cellSize}, ${0 * cellSize})`}>
        <PlusStar
          colors={["gold", "#a91b0d", "gold", "#a91b0d"]}
          cellSize={10}
          x={3}
        />
        <PlusStar
          colors={["gold", "#a91b0d", "gold", "#a91b0d"]}
          cellSize={10}
          x={9}
        />
      </g>
      <g transform={`translate(${0 * cellSize}, ${5 * cellSize})`}>
        <PlusStar
          colors={["gold", "#a91b0d", "gold", "#a91b0d"]}
          cellSize={10}
          x={0}
        />
        <PlusStar
          colors={["gold", "#a91b0d", "gold", "#a91b0d"]}
          cellSize={10}
          x={6}
        />
        <PlusStar
          colors={["gold", "#a91b0d", "gold", "#a91b0d"]}
          cellSize={10}
          x={12}
        />
      </g>
      <g transform={`translate(${0 * cellSize}, ${10 * cellSize})`}>
        <PlusStar
          colors={["gold", "#a91b0d", "gold", "#a91b0d"]}
          cellSize={10}
          x={3}
        />
        <PlusStar
          colors={["gold", "#a91b0d", "gold", "#a91b0d"]}
          cellSize={10}
          x={9}
        />
      </g>
    </Fabric>
  );
}
