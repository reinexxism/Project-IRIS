import React from "react";
import "./ColorChip.css";

export default function ColorChip({ name }) {
  return (
    <div className="color-chip-container">
      <span className="color-chip-name">{name}</span>
    </div>
  );
}
