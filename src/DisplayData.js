import "./css/DisplayData.css";
import React from "react";
import CompleteDate from "./CompleteDate";
import CompleteTime from "./CompleteTime";
import WeatherImage from "./WeatherImage";

export default function DisplayData(props) {
  let degrees = props.degrees;
  function convertToFahrenheitDegree(event) {
    event.preventDefault();
    let d = degrees;
    console.log("To F .." + props.unit + "--- " + d);
    if (props.unit === "metric") {
      let de = Math.round(d * 1.8 + 32);
      degrees = Object.assign(props.degrees, de);
      console.log("--- " + props.degrees);
      //Object.assign(props.unit, "imperial");
      console.log("after F .." + props.unit + "--- ");
    }
  }

  function convertToCelsiusDegree(event) {
    event.preventDefault();
    let d = degrees;
    if (props.unit === "imperial") {
      degrees = Math.round((d - 32) / 1.8);
      props.unit = "metric";
    }
  }

  return (
    <div className="DisplayData">
      <div className="container">
        <h3 className="current-city-name">{props.city}</h3>
        <div className="row current-city-data">
          <div className="col-sm current-city-data-d">
            <span className="current-city-data-date">
              <CompleteDate date={props.date} />
            </span>
            <span className="current-city-data-time">
              <CompleteTime date={props.time} />
            </span>
          </div>
          <div className="col-sm current-city-data-temperature">
            <span className="degrees">{degrees}</span>
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
              <div className="img">
                <WeatherImage image={props.image} />
                {/* <img className="img" src={props.image} alt={props.description} /> */}
              </div>
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
