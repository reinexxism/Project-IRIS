import React from "react";
import "./AppContainer.css";
import KeySection from "./components/KeySection";
import ShadeSection from "./components/ShadeSection";

export default function AppContainer() {
  return (
    <div className="container">
      <KeySection />
      <ShadeSection />
    </div>
  );
}
