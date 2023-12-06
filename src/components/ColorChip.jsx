import React from "react";
import "./ColorChip.css";

export default function ColorChip({ name, color }) {
  return (
    <div className="color-chip-container" style={{ backgroundColor: color }}>
      <span className="color-chip-name">{name}</span>
    </div>
  );
}
