import React, { useEffect, useState } from "react";
import "./ShadeSection.css";
import ColorChip from "./ColorChip";
import Theme from "./Theme";

export default function ShadeSection() {
  return (
    <div className="shade-section-container scroll">
      <div className="title">
        <h3>Shades of GREEN</h3>
        <Theme />
      </div>
      <div className="shade-layer">
        <ColorChip />
        <ColorChip />
        <ColorChip />
        <ColorChip />
        <ColorChip />
        <ColorChip />
      </div>
      <div className="shade-layer">
        <ColorChip />
        <ColorChip />
        <ColorChip />
        <ColorChip />
        <ColorChip />
        <ColorChip />
      </div>
      <div className="shade-layer">
        <ColorChip />
        <ColorChip />
        <ColorChip />
        <ColorChip />
        <ColorChip />
        <ColorChip />
      </div>
      <div className="shade-layer">
        <ColorChip />
        <ColorChip />
        <ColorChip />
        <ColorChip />
        <ColorChip />
        <ColorChip />
      </div>
    </div>
  );
}
