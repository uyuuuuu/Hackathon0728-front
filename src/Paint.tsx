import Canvas from "./component/Canvas";
import Back from "./component/Back";

function Paint() {
  return (
    <>
      <div className="left-0 py-4 px-4">
        <Back />
      </div>
      <Canvas width={1240} height={500} />
    </>
  );
}

export default Paint;
