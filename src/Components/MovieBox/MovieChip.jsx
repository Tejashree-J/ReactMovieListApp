/* eslint-disable react/prop-types */
export default function MovieChip({ data, setSelected }) {
  const handleClick = () => {
    setSelected((prev) => prev.filter((item) => item !== data));
  };
  return (
    <div
      style={{
        background: "green",
        padding: "10px",
        borderRadius: "20px",
        width: "18%",
        margin: "5px",
        
      }}
    >
      {data}&nbsp; &nbsp;{" "}
      <span onClick={handleClick} style={{ float: "right",marginRight:"7px" }}>
        X
      </span>
    </div>
  );
}
