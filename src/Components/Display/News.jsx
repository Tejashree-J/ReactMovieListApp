import { useEffect, useState } from "react";

export default function News() {
  const [news, setNews] = useState(null);
  const url =
    "https://api.worldnewsapi.com/search-news?text=earth+quake&language=en";
  const apiKey = "0bbce6b306b54cef8452109ee3362aaa";

  // useEffect(() => {
  //   fetch(
  //     "https://api.worldnewsapi.com/search-news?text=cricket&language=en&api-key=0bbce6b306b54cef8452109ee3362aaa"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setNews(data))
  //     .catch((error) => console.error(error));
  // }, []);
  // console.log(news);
  return (
    <>
      <div
        style={{
          width: "40%",
          height: "100%",
          margin: "20px",
          borderRadius: "10px",
        }}
      >
        <h1>News</h1>
        {news ? (
          <img
            src={news.news[1].image}
            alt="Image is not available for this News"
          />
        ) : (
          <p>Loading...</p>
        )}
        {news ? <h3>{news.news[1].title}</h3> : <p>Loading...</p>}
        {news ? (
          <p style={{ marginTop: "10px" }}>
            {news.news[1].text.slice(0, 1000)}
          </p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
