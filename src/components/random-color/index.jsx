import React, { useEffect } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = React.useState("hex");
  const [color, setColor] = React.useState("#000000");

  function utilityColorChange(length) {
    return Math.floor(Math.random() * length);
  }

  function handleColorHex() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    var hexColor = "#";

    for (var i = 0; i < 6; i++) {
      hexColor += hex[utilityColorChange(hex.length)];
    }
    setColor(hexColor);
  }

  function handleColorRGB(){
    const r = utilityColorChange(256);
    const g = utilityColorChange(256);
    const b = utilityColorChange(256);
   setColor(`rgb(${r},${g}, ${b})`);
  }

  useEffect(()=>{
    if(typeOfColor === "rgb") handleColorRGB();
    else handleColorHex();
  },[typeOfColor])

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        textAlign: "center",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>CreateHexColor</button>
      <button onClick={() => setTypeOfColor("rgb")}>CreateRGBColor</button>
      <button onClick={typeOfColor === "hex" ? handleColorHex : handleColorRGB}>
        CreateRandomColor
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? " Color" : "HEX color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
