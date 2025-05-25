import { useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState(localStorage.getItem("notes") ?? "");
  const handleChange = (e) => {
    setNotes(e.target.value);
    localStorage.setItem("notes", e.target.value);
  };

  return (
    <div
      className="notes"
      style={{
        margin: "10px",
        padding:"15px",
        maxWidth: "21vw", 
        maxHeight: "350px",
        height: "350px",
        width: "21vw",
        background: "#F1C75B",
        color: "#000",
        fontFamily: "Roboto",
        borderRadius:"20px"
      }}
    >
      <h1>Notes</h1>
      <textarea
        onChange={handleChange}
        value={notes}
        style={{
          width: "20vw",
          height: "300px",
          border: "none",
          background: "#F1C75B",
          marginLeft: "5px",
          color:"#000"
        }}
      >
        The notes will go here
      </textarea>
    </div>
  );
}
