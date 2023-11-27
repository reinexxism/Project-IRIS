import React from "react";
import "./KeyColorCircle.css";

export default function KeyColorCircle({ keyColorValue }) {
  return <div className={`key-color-circle-container ${keyColorValue}`}></div>;
}
