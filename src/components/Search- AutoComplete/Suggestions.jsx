import React from "react";

const Suggestions = ({ data, handleClick }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ul>
        {data.map((item, index) => (
          <li key={index} onClick={handleClick}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
