import { Player } from "@lottiefiles/react-lottie-player";
import Animation from "../assets/kanpaiData.json";

function Kanpai() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        pointerEvents: "none",
      }}
    >
      <Player
        autoplay
        keepLastFrame
        src={Animation}
        style={{
          height: "900px",
          width: "1280px",
        }}
      />
    </div>
  );
}

export default Kanpai;