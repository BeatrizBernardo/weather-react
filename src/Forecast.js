import React, { useState } from "react";
import axios from "axios";
import DisplayForecast from "./DisplayForecast";
import { Eclipse } from "react-loading-io";

import "./css/Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function showForecastDays(response) {
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
    axios.get(forecastURL).then(showForecastDays);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forecast container">
        <div className="row next-days-data">
          <DisplayForecast info={forecast.list[0]} />
          <DisplayForecast info={forecast.list[1]} />
          <DisplayForecast info={forecast.list[2]} />
          <DisplayForecast info={forecast.list[3]} />
          <DisplayForecast info={forecast.list[4]} />
        </div>
      </div>
    );
  } else {
    getStarterForecast();
    return (
      <div className="Forecast">
        <Eclipse size={190} color={"#522d5b"} />;
      </div>
    );
  }
}
