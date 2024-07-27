import Canvas from "./component/Canvas";
import Back from "./component/Back";

function Paint() {
  return (
    <>
      <div className="left-0 py-2 px-2">
        <Back />
      </div>
      <Canvas width={1240} height={600} />
    </>
  );
}

export default Paint;
