import React from "react";
import "./ShadeSection.css";
import ColorChip from "./ColorChip";

export default function ShadeSection() {
  return (
    <div className="shade-section-container scroll">
      <div className="title">
        <h3>Shades of GREEN</h3>
      </div>
      <div className="shade-layer">
        <ColorChip name="Frosted Jade" />
        <ColorChip name="Soft Celadon" />
        <ColorChip name="Palace Green" />
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
