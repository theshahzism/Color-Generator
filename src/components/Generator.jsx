import { useState } from "react";

const Generator = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const handleCreateHex = () => {
    let hexColor = "";
    for (let i = 0; i < 5; i++) {
      hexColor += Math.random() * 1000000;
    }
    hexColor = Math.floor(parseInt(hexColor));
    hexColor = `#${hexColor}`;
    console.log(hexColor);
    console.log(typeof hexColor);
    setColor(hexColor);
  };

  const handleCreateRgb = () => {
    let r = Math.floor(Math.random() * 100);
    let g = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 100);
    let rgbColor = `rgb(${r},${g},${b})`;
    console.log(rgbColor);
    setColor(rgbColor);
  };

  return (
    <div style={{ height: "100vh", width: "100vw", background: color }}>
      <button onClick={() => setTypeOfColor("hex")}>Create Hex color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB color</button>
      <button
        onClick={typeOfColor === "hex" ? handleCreateHex : handleCreateRgb}
      >
        Generate a random color
      </button>
      <div className="colorValue">The Color is {color}</div>
    </div>
  );
};
export default Generator;
