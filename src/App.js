import "./styles.css";
import React from "react";
import CustomStepper from "./CustomStepper.js";
export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <CustomStepper checked={true} side={"Side1"} />
      <CustomStepper checked={true} side={"Side2"} />
      <CustomStepper checked={false} side={"Side3"} />
      <CustomStepper checked={false} side={"Side4"} />
      <CustomStepper checked={false} side={"Side5"} />
      <CustomStepper checked={true} side={"Side6"} />
    </div>
  );
}
