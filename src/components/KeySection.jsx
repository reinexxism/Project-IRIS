import React from "react";
import "./KeySection.css";
import KeyColor from "./KeyColor";

export default function KeySection() {
  return (
    <div className="key-section-container scroll">
      <KeyColor keyColorName="red" />
      <KeyColor keyColorName="orange" />
      <KeyColor keyColorName="yellow" />
      <KeyColor keyColorName="green" />
      <KeyColor keyColorName="blue" />
      <KeyColor keyColorName="purple" />
      <KeyColor keyColorName="white" />
      <KeyColor keyColorName="black" />
      <KeyColor keyColorName="brown" />
      <KeyColor keyColorName="pink" />
    </div>
  );
}
