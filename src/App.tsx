import { useState } from "react";
import './App.css'

function translateHexToRGB(hex: string) {
  if (!/^#[0-9A-Fa-f]{6}$/g.test(hex)) {
    return "Ошибка!";
  }

  hex = hex.replace("#", "");

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgb(${r}, ${g}, ${b})`;
}

export default function Home() {
  const [color, setColor] = useState("");

  const hexHandler = (e: any) => {
    e.preventDefault();
    if (e.target.value.length >= 7) {
      const rgbaString = translateHexToRGB(e.target.value);
      rgbaString === "Ошибка!"
        ? setColor("rgba(255, 69, 0)")
        : setColor(rgbaString);
    } else setColor("");
  };

  return (
    <div className="container" style={{ backgroundColor: `${color}` }}>
      <div className="form">
        <input
          className="input hex"
          type="text"
          onInput={(e) => hexHandler(e)}
        />
        <div className="input rgba">
          <span>{color === "rgba(255, 69, 0)" ? "Ошибка!" : color}</span>
        </div>
      </div>
    </div>
  );
}