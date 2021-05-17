import { makeStyles } from "@material-ui/core";
import Fabric from "../components/Fabric";
import { IsoTriangle } from "../components/shapes/Triangles";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    margin: "0 auto"
  }
});

export default function IsoscelesTriangles() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
      <Fabric showGrid gridSize={[19, 19]} gridColor="black">
        <IsoTriangle orientation="north" size={13} fill="red" x={3} y={6} />
        <IsoTriangle orientation="south" size={13} fill="red" x={3} y={6} />
        <IsoTriangle orientation="east" size={13} fill="red" x={6} y={3} />
        <IsoTriangle orientation="west" size={13} fill="red" x={6} y={3} />
      </Fabric>
      <Fabric showGrid gridSize={[19, 19]} gridColor="black">
        <IsoTriangle orientation="north" size={13} fill="red" x={3} y={12} />
        <IsoTriangle orientation="south" size={13} fill="red" x={3} y={0} />
        <IsoTriangle orientation="east" size={13} fill="red" x={0} y={3} />
        <IsoTriangle orientation="west" size={13} fill="red" x={12} y={3} />
      </Fabric>
    </div>
  );
}
