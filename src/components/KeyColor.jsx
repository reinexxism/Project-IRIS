import React, { useState } from "react";
import "./KeyColor.css";
import KeyColorCircle from "./KeyColorCircle";

export default function KeyColor({ keyColorName }) {
  return (
    <div className="key-color-container">
      <KeyColorCircle keyColorValue={keyColorName} />
      <span className="key-color-name">{keyColorName}</span>
    </div>
  );
}
