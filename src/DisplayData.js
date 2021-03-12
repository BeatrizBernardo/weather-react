import "./css/DisplayData.css";
import React from "react";

export default function DisplayData(props) {
  function convertToFahrenheitDegree(event) {
    event.preventDefault();
    let d = props.degrees;
    console.log("To F -- " + d);
    console.log("to F unit -- " + props.unit);
    if (props.unit === "metric") {
      props.degrees = Math.round({ d } * 1.8 + 32);
      props.unit = "imperial";
      console.log("To F after-- " + props.degrees);
      console.log("to F new unit -- " + props.unit);
    }
  }

  function convertToCelsiusDegree(event) {
    event.preventDefault();
    let d = props.degrees;
    console.log("To C -- " + d);
    console.log("to C unit -- " + props.unit);
    if (props.unit === "imperial") {
      props.degrees = Math.round(({ d } - 32) / 1.8);
      props.unit = "metric";
      console.log("To C after-- " + props.degrees);
      console.log("to C new unit -- " + props.unit);
    }
  }

  return (
    <div className="DisplayData">
      <div className="container">
        <h3 className="current-city-name">{props.city}</h3>
        <div className="row current-city-data">
          <div className="col-sm current-city-data-d">
            <span className="current-city-data-date">{props.date}</span>
            <span className="current-city-data-time">{props.time}</span>
          </div>
          <div className="col-sm current-city-data-temperature">
            <span className="degrees">{props.degrees}</span>
            <span>
              º
              <a
                href="/"
                className="C-Degrees"
                onClick={convertToCelsiusDegree}
              >
                C
              </a>
              |
              <a
                href="/"
                className="F-Degrees"
                onClick={convertToFahrenheitDegree}
              >
                F
              </a>
            </span>
          </div>
          <div className="col-sm">
            <span className="current-city-data-image">
              <img className="img" src={props.image} alt={props.description} />
            </span>
            <span className="current-city-data-image-description">
              {props.description}
            </span>
            <span className="current-city-data-image-speed">
              Wind: {props.wind}km/h
            </span>
            <span className="current-city-data-image-humidity">
              Humidity: {props.humidity}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
