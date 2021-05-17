import Fabric from "../components/Fabric";
import { IsoTriangle } from "../components/shapes/Triangles";

export default function IsoscelesTriangles() {
  return (
    <>
      <Fabric showGrid gridSize={[19, 19]} gridColor="black">
        <IsoTriangle orientation="north" size={13} fill="red" x={3} y={6} />
      </Fabric>
      <Fabric showGrid gridSize={[19, 19]} gridColor="black">
        <IsoTriangle orientation="south" size={13} fill="red" x={3} y={6} />
      </Fabric>
      <Fabric showGrid gridSize={[19, 19]} gridColor="black">
        <IsoTriangle orientation="east" size={13} fill="red" x={6} y={3} />
      </Fabric>
      <Fabric showGrid gridSize={[19, 19]} gridColor="black">
        <IsoTriangle orientation="west" size={13} fill="red" x={6} y={3} />
      </Fabric>
    </>
  );
}
