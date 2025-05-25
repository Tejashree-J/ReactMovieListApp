import { useState } from "react";
import action from "../assets/action.png";
import drama from "../assets/drama.png";
import fantasy from "../assets/fantasy.png";
import fiction from "../assets/fiction.png";
import horror from "../assets/horror.png";
import music from "../assets/music.png";
import romance from "../assets/romance.png";
import thriller from "../assets/thriller.png";
import western from "../assets/western.png";
import MovieBox from "../Components/MovieBox/MovieBox";
import MovieChip from "../Components/MovieBox/MovieChip";
import { useNavigate } from "react-router-dom";
import "../Components/MovieBox/MoviePage.css";

const genres = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img src={action} />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img src={drama} />,
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: <img style={{ width: "160px", height: "120px" }} src={fantasy} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ width: "160px", height: "120px" }} src={fiction} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ width: "160px", height: "120px" }} src={horror} />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img style={{ width: "160px", height: "120px" }} src={music} />,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: <img style={{ width: "160px", height: "120px" }} src={romance} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{ width: "160px", height: "120px" }} src={thriller} />,
  },
  {
    id: "Western",
    color: "#912500",
    image: <img style={{ width: "160px", height: "120px" }} src={western} />,
  },
];
export default function Movies() {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    if (selected.length < 3) {
      return;
    } else {
      localStorage.setItem("movies", JSON.stringify(selected));
      navigate("/display");
    }
  };
  console.log(selected);
  return (
    <>
      <section id="moviePage">
        <div className="leftMovieContent">
          <h2 className="appTitle">Super app</h2>
          <h1>Choose your entertainment category</h1>

          <div className="selectedCategory">
            {selected.map((item) => {
              return (
                <MovieChip
                  key={item}
                  data={item}
                  selected={selected}
                  setSelected={setSelected}
                />
              );
            })}

            {selected.length < 3 ? (
              <p className="warning">Minimum 3 categories required</p>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div
          className="rightMovieContent"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "16px",
          }}
        >
          {genres.map((genres) => {
            return (
              <MovieBox
                key={genres}
                data={genres}
                selected={selected}
                setSelected={setSelected}
              />
            );
          })}
        </div>
      </section>
      <div className="nextBtn">
        <button onClick={handleClick}>Next Page</button>
      </div>
    </>
  );
}
