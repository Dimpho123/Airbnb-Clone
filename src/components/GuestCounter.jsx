import React from "react";
import "./GuestCounter.css";

const GuestCounter = ({
  label,
  value,
  setValue,
  min = 0,
}) => {
  return (
    <div className="guest-counter">
      <span>{label}</span>

      <div className="guest-buttons">
        <button
          onClick={() =>
            value > min && setValue(value - 1)
          }
        >
          −
        </button>

        <span>{value}</span>

        <button
          onClick={() =>
            setValue(value + 1)
          }
        >
          +
        </button>
      </div>
    </div>
  );
};

export default GuestCounter;