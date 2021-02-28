import "./css/DisplayData.css";
import React, { useState } from "react";

export default function DisplayData(props) {
  const [degrees, setDegrees] = useState(props.degrees);
  let currentWeather = {
    city: props.city,
    date: props.date,
    time: props.time,
    degrees: props.degrees,
    image: props.image,
    description: props.description,
    wind: props.wind,
    humidity: props.humidity,
  };

  function convertToFahrenheitDegree(event) {
    if (props.unit === "metric") {
      event.preventDefault();
      setDegrees(Math.round({ degrees } * 1.8 + 32));
    }
  }

  function convertToCelsiusDegree(event) {
    if (props.unit === "imperial") {
      event.preventDefault();
      setDegrees(Math.round(({ degrees } - 32) / 1.8));
    }
  }

  return (
    <div className="DisplayData">
      <div className="container">
        <h3 className="current-city-name">{currentWeather.city}</h3>
        <div className="row current-city-data">
          <div className="col-sm current-city-data-d">
            <span className="current-city-data-date">
              {currentWeather.date}
            </span>
            <span className="current-city-data-time">
              {currentWeather.time}
              {console.log("Display the weather...")}
            </span>
          </div>
          <div className="col-sm current-city-data-temperature">
            <span className="degrees">{currentWeather.degrees}</span>
            <span>
              º
              <a
                href="/"
                className="C-Degrees"
                onClick={convertToFahrenheitDegree}
              >
                C
              </a>
              |
              <a
                href="/"
                className="F-Degrees"
                onClick={convertToCelsiusDegree}
              >
                F
              </a>
            </span>
          </div>
          <div className="col-sm">
            <span className="current-city-data-image">
              {currentWeather.image}
            </span>
            <span className="current-city-data-image-description">
              {currentWeather.description}
            </span>
            <span className="current-city-data-image-speed">
              Wind: {currentWeather.wind}km/h
            </span>
            <span className="current-city-data-image-humidity">
              Humidity: {currentWeather.humidity}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
