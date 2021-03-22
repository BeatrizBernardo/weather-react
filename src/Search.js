import React, { useState } from "react";
import axios from "axios";
import DisplayData from "./DisplayData.js";
import Forecast from "./Forecast.js";
import { Eclipse } from "react-loading-io";

import "./css/Search.css";

export default function Search(props) {
  const [currentWeather, setCurrentWeather] = useState({ unit: "metric" });
  const [tempCity, setTempCity] = useState(props.city);

  const [loaded, setLoaded] = useState(false);

  const [typeForecast, setTypeForecast] = useState("Forecast by Days");
  const [type, setType] = useState("0");

  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "7ec05f26b77b01d3642a971e0b2d2553";

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="group-form search-form">
        <input
          type="text"
          placeholder="Type the city here"
          className="form-control search-field"
          onChange={getCity}
        />
        <button className="btn search-button" type="submit">
          <i className="fas fa-search"></i>
        </button>
        <button
          className="btn search-button"
          type="button"
          onClick={showCurrentCityData}
        >
          Current City
        </button>

        <button
          className="btn search-button"
          type="button"
          onClick={changeTypeForecast}
        >
          {typeForecast}
        </button>
      </div>
    </form>
  );

  function changeTypeForecast(event) {
    if (typeForecast === "Forecast by Hour") {
      setTypeForecast("Forecast by Days");
      setType("0");
    } else {
      setTypeForecast("Forecast by Hour");
      setType("1");
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    getStartedData();
  }

  function getCity(event) {
    /** add the city to a temporary variable, to not target the city variable */
    setTempCity(event.target.value);
  }

  //current city by button
  function showCurrentCityData(event) {
    event.preventDefault();

    navigator.geolocation.getCurrentPosition(function (position) {
      let apiURL = `${apiEndpoint}?appid=${apiKey}&units=${currentWeather.unit}&lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
      axios.get(apiURL).then(getData);
    });
  }

  function getStartedData() {
    let apiURL = `${apiEndpoint}?q=${tempCity}&appid=${apiKey}&units=${currentWeather.unit}`;
    axios.get(apiURL).then(getData);
  }

  function getData(response) {
    setCurrentWeather({
      city: response.data.name,
      date: response.data.dt,
      time: response.data.dt,
      degrees: Math.round(response.data.main.temp),
      image: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      unit: "metric",
    });
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Search">
        {form}
        <DisplayData
          city={currentWeather.city}
          date={currentWeather.date}
          time={currentWeather.time}
          degrees={currentWeather.degrees}
          image={currentWeather.image}
          description={currentWeather.description}
          wind={currentWeather.wind}
          humidity={currentWeather.humidity}
          unit={currentWeather.unit}
        />
        <Forecast city={currentWeather.city} tipoForecast={type} />
      </div>
    );
  } else {
    getStartedData();
    return (
      <div className="Search">
        {form}
        <div className="loading">
          <Eclipse size={190} color={"#522d5b"} />;
        </div>
      </div>
    );
  }
}
