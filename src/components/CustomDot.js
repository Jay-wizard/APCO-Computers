export const CustomDot = ({ active }) => (
  <span
    style={{
      backgroundColor: active ? "purple" : "lightgray",
      width: "10px",
      height: "10px",
      margin: "0 5px",
      borderRadius: "50%",
      display: "inline-block",
    }}
  />
);
