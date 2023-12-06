import React, { useEffect, useState } from "react";
import "./ShadeSection.css";
import ColorChip from "./ColorChip";
import Theme from "./Theme";

export default function ShadeSection() {
  const [shadeColors, setShadeColors] = useState(null);

  useEffect(() => {
    fetch("/data/shades-green.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShadeColors(data);
      });
  }, []);

  return (
    <div className="shade-section-container scroll">
      <div className="title">
        <h3>Shades of GREEN</h3>
        <Theme />
      </div>
      <div className="shade-layer">
        {shadeColors &&
          shadeColors.layers[0].shades.map((color) => {
            return (
              <ColorChip
                key={color.id}
                name={color.name}
                color={color.hexCode}
              />
            );
          })}
      </div>
      <div className="shade-layer">
        {shadeColors &&
          shadeColors.layers[1].shades.map((color) => {
            return (
              <ColorChip
                key={color.id}
                name={color.name}
                color={color.hexCode}
              />
            );
          })}
      </div>
      <div className="shade-layer">
        {shadeColors &&
          shadeColors.layers[2].shades.map((color) => {
            return (
              <ColorChip
                key={color.id}
                name={color.name}
                color={color.hexCode}
              />
            );
          })}
      </div>
      <div className="shade-layer">
        {shadeColors &&
          shadeColors.layers[3].shades.map((color) => {
            return (
              <ColorChip
                key={color.id}
                name={color.name}
                color={color.hexCode}
              />
            );
          })}
      </div>
    </div>
  );
}
