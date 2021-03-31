import "./css/DisplayData.css";
import React from "react";
import CompleteDate from "./CompleteDate";
import CompleteTime from "./CompleteTime";
import WeatherImage from "./WeatherImage";
import WeatherTemperature from "./WeatherTemperature";

export default function DisplayData(props) {
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
            <WeatherTemperature unit={props.unit} degrees={props.degrees} />
          </div>
          <div className="col-sm">
            <span className="current-city-data-image">
              <div className="img">
                <WeatherImage image={props.image} size={40} />
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
