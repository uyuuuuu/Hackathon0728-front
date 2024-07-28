import Message from "./component/Message";
import Back from "./component/Back";

function Board() {
  return (
    <>
      <div className="left-0 py-4 px-4">
        <Back />
      </div>
      <Message />
    </>
  );
}

export default Board;
