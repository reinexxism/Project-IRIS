import React, { useEffect, useState } from "react";
import "./KeySection.css";
import KeyColor from "./KeyColor";

export default function KeySection() {
  let [keyColors, setKeyColors] = useState([]);

  useEffect(() => {
    fetch("/data/key-colors.json")
      .then((res) => res.json())
      .then((data) => setKeyColors(data));
  }, []);

  return (
    <div className="key-section-container scroll">
      {keyColors.map((color) => {
        return <KeyColor key={color.id} keyColorName={color.keyColor} />;
      })}
    </div>
  );
}
