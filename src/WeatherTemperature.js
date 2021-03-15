import React, { useState } from "react";
import "./css/WeatherTemperature.css";
export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState(props.unit);

  function convertToFahrenheitDegree(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function convertToCelsiusDegree(event) {
    event.preventDefault();
    setUnit("metric");
  }

  if (unit === "metric") {
    return (
      <div className="WeatherTemperature">
        <span className="degrees">{props.degrees}</span>
        <span>
          º C |{" "}
          <a href="/" className="F-Degrees" onClick={convertToFahrenheitDegree}>
            F
          </a>
        </span>
      </div>
    );
  } else {
    let fDegrees = Math.round(props.degrees * 1.8 + 32);
    return (
      <div className="WeatherTemperature">
        <span className="degrees">{fDegrees}</span>
        <span>
          º
          <a href="/" className="C-Degrees" onClick={convertToCelsiusDegree}>
            C
          </a>{" "}
          | F
        </span>
      </div>
    );
  }
}
