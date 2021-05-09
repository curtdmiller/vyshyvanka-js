import Fabric from "../components/Fabric";
import Star from "../components/shapes/Star";

export default function StarTest() {
  return (
    <Fabric gridSize={[37, 51]} backgroundColor="#222" showGrid>
      <Star center={[2, 5]} color="white" width={1} />
      <Star center={[6, 5]} color="white" width={3} />
      <Star center={[12, 5]} color="white" width={5} />
      <Star center={[20, 5]} color="white" width={7} />
      <Star center={[30, 5]} color="white" width={9} />
      <Star center={[7, 20]} color="white" width={11} />
      <Star center={[28, 20]} color="white" width={13} />
      <Star center={[9, 37]} color="white" width={15} />
      <Star center={[27, 37]} color="white" width={17} />
    </Fabric>
  );
}
