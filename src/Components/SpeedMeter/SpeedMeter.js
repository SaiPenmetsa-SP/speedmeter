import React, { useState } from "react";
import "./index.css";

const SpeedMeter = () => {
  const [acceleration, setAcceleration] = useState(0);
  const handleAccelerate = () => {
    if (acceleration < 200) {
      setAcceleration(acceleration + 10);
    }
  };
  const handleBrake = () => {
    if (acceleration !== 0) {
      setAcceleration(acceleration - 10);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#07080c",
        width: "100%",
        height: "100vh",
        paddingTop: "10px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "white" }}>SPEED METER</h1>
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        // src="https://img.freepik.com/free-vector/speedometer-panel-black-panel-temperature-reading-speed-fuel-with-brightly-colored-scales_1284-42149.jpg"
        alt="speed"
      />
      <h1 style={{ color: "white" }}>Speed is {acceleration} mph</h1>
      <p style={{ color: "white" }}>Min Limit is 0mph Max Limit is 200mph</p>
      <button
        onClick={handleAccelerate}
        style={{
          width: "120px",
          height: "35px",
          backgroundColor: "#0a6bf0",
          color: "white",
          borderWidth: "0px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Accelerate
      </button>
      <button
        onClick={handleBrake}
        style={{
          width: "120px",
          height: "35px",
          backgroundColor: "transparent",
          color: "white",
          borderColor: "white",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Apply Break
      </button>
    </div>
  );
};

export default SpeedMeter;
