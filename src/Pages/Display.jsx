import News from "../Components/Display/News";
import Notes from "../Components/Display/Notes";
import Timer from "../Components/Display/Timer";
import UserInfo from "../Components/Display/UserInfo";
import Weather from "../Components/Display/Weather";

function Display() {
  return (
    <div style={{margin:"20px", overflowY:"hidden"}}>
      <div style={{ display: "flex", position:'relative' }}>
        <UserInfo />
        <Notes />
        <News />
      </div >
      <div style={{ position:"absolute" , top:"46%"}}>
      <Weather />
      <Timer />
      </div>
    </div>
  );
}

export default Display;
