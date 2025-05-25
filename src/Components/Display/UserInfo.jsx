import React from "react";
import "./UserInfo.css";
import vectorMan from "../../assets/vectorMan.png";

export default function UserInfo() {
  const info = JSON.parse(localStorage.getItem("userInfo"));
  const movies = JSON.parse(localStorage.getItem("movies"));

  return (
    <>
      <div className="userCard">
        <div className="vectorImg">
          <img src={vectorMan} alt="Man" />
        </div>
        <div className="userDetails">
          <p>{info.name}</p>
          <p>{info.email}</p>
          <p style={{ fontSize: "26px", fonWeight: "500" }}>{info.username}</p>
          <div className="selectedCategory">
            {movies.map((item) => {
              return (
                <div className="item" key={item}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
