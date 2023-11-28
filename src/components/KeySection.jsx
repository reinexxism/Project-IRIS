import React, { useEffect, useState } from "react";
import "./KeySection.css";
import KeyColor from "./KeyColor";

export default function KeySection() {
  let [keyColors, setKeyColors] = useState([]);

  useEffect(() => {
    fetch("/data/color-set.json")
      .then((res) => res.json())
      .then((data) => setKeyColors(data));
  }, []);

  console.log(keyColors.KeyColor);
  return (
    <div className="key-section-container scroll">
      {keyColors.map((color) => {
        return <KeyColor key={color.id} keyColorName={color.keyColor} />;
      })}
    </div>
  );
}
