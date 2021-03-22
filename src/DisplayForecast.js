import React from "react";
import PartialDate from "./PartialDate.js";
import WeatherImage from "./WeatherImage.js";

import "./css/DisplayForecast.css";
import PartialTime from "./PartialTime.js";

export default function DisplayForecast(props) {
  return (
    <div className="DisplayForecast col next-day">
      <div className="row row-cols-1">
        <div className="col">
          <PartialTime date={props.info.dt * 1000} forecast={0} />
        </div>
        <div className="col">{Math.round(props.info.main.temp)}ºC</div>
        <div className="col">
          <WeatherImage image={props.info.weather[0].icon} />
        </div>
      </div>
    </div>
  );
}
