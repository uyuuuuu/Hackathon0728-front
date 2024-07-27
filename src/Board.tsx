import Message from "./component/Message";
import Back from "./component/Back";

function Board() {
  return (
    <>
      <div className="left-0 py-2 px-2">
        <Back />
      </div>
      <Message />
    </>
  );
}

export default Board;
