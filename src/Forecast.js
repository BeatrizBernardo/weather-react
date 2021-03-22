import React, { useState } from "react";
import axios from "axios";
import DisplayForecastDays from "./DisplayForecastDays";
import { Eclipse } from "react-loading-io";
import DisplayForecastHour from "./DisplayForecastHour";

import "./css/Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function showForecast(response) {
    //forecast[index].date = response.data.list[index].dt;
    /*forecast[index].temperature = Math.round(
        response.data.list[index].main.temp
      );*/
    //forecast[index].image = response.data.list[index].weather[0].icon;

    setForecast(response.data);
    setLoaded(true);
  }

  function getStarterForecast() {
    let apiEndpointForecast =
      "https://api.openweathermap.org/data/2.5/forecast";
    let apiKey = "7ec05f26b77b01d3642a971e0b2d2553";
    let forecastURL = `${apiEndpointForecast}?appid=${apiKey}&q=${props.city}&units=metric`;
    axios.get(forecastURL).then(showForecast);
  }

  if (loaded && props.city === forecast.city.name) {
    if (props.tipoForecast === "0") {
      return (
        <div className="Forecast container">
          <div className="row next-days-data">
            <DisplayForecastHour info={forecast.list[0]} />
            <DisplayForecastHour info={forecast.list[1]} />
            <DisplayForecastHour info={forecast.list[2]} />
            <DisplayForecastHour info={forecast.list[3]} />
            <DisplayForecastHour info={forecast.list[4]} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="Forecast container">
          <div className="row next-days-data">
            <DisplayForecastDays info={forecast.list[0]} />
            <DisplayForecastDays info={forecast.list[8]} />
            <DisplayForecastDays info={forecast.list[16]} />
            <DisplayForecastDays info={forecast.list[24]} />
            <DisplayForecastDays info={forecast.list[32]} />
          </div>
        </div>
      );
    }
  } else {
    getStarterForecast();
    return (
      <div className="Forecast">
        <div className="loading">
          <Eclipse size={190} color={"#522d5b"} />;
        </div>
      </div>
    );
  }
}
