import "../MovieBox/MoviePage.css"


/* eslint-disable react/prop-types */
export default function MovieBox({ data, selected, setSelected }) {
  const isSelected = selected.includes(data.id);
  const handleClick = () => {
    if (selected.includes(data.id)) {
      setSelected((prev) => prev.filter((item) => item !== data.id));
    } else {
      setSelected((prev) => {
        return [...prev, data.id];
      });
    }
  };
  return (
    <div className="movieCategory"
      onClick={handleClick}
      style={{justifyContent:"space-between",alignItems:"center",background: data.color, textAlign: "center", borderRadius: "5px", cursor: "pointer", margin: "0",
        border: isSelected ? "12px solid green" : "",
      }}
    >
      <p>{data.id}</p>
      {data.image}
    </div>
  );
}