import { useEffect, useState } from "react";

export default function MovieRow({ genre }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.id}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTc2NzE3YzcwMjgwYmMwMGZkNTI4YTQwYWE0YmExYiIsIm5iZiI6MTc0ODUyNzIxNC40MzM5OTk4LCJzdWIiOiI2ODM4Njg2ZWYwYjZlYmJjYjAwMzg2MjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.22-Kp2mJNxrPrEaFPND0omuPEhiSeAQCF8L0M0Y5q8Q",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setMovies(json.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="listingPage">
      <p className="movieType">{genre.name}</p>
      <div className="movieRow">
        {movies.map((movies, index) => {
          return index >= 4 ? (
            <></>
          ) : (
            <div key={index}>
              <img
                className="movieImage"
                src={`https://image.tmdb.org/t/p/w300/${movies.poster_path}`}
                alt={movies.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
