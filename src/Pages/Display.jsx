import { useNavigate } from "react-router-dom";
import News from "../Components/Display/News";
import Notes from "../Components/Display/Notes";
import Timer from "../Components/Display/Timer";
import UserInfo from "../Components/Display/UserInfo";
import Weather from "../Components/Display/Weather";

function Display() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/browse");
  }

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div style={{ display: "flex", position: "relative", margin: "20px" }}>
        <UserInfo />
        <Notes />
        <News />
      </div>
      <div style={{ position: "absolute", top: "46%", margin: "20px" }}>
        <Weather />
        <Timer />
      </div>
      <button
        style={{
          position: "absolute",
          right: "50px",
          bottom: "50px",
          border: "none",
          borderRadius: "30px",
          width: "100px",
          padding: "10px",
          backgroundColor: "#148A08",
          color: "white",
          cursor: "pointer",
          fontSize: "16px",
          fontFamily: "DM Sans",
        }}
        onClick={handleClick}
      >
        {" "}
        Browse
      </button>
    </div>
  );
}

export default Display;
