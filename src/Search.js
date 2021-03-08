import React, { useState } from "react";
import axios from "axios";
import DisplayData from "./DisplayData";
import Forecast from "./Forecast";

import "./css/Search.css";

export default function Search(props) {
  const [currentWeather, setCurrentWeather] = useState({ unit: "metric" });

  const [loaded, setLoaded] = useState(false);

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const [tempCity, setTempCity] = useState(props.city);

  //let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "7ec05f26b77b01d3642a971e0b2d2553";

  //receive a date, return in dd/mm
  function getDayMonth(d) {
    let date = new Date(d);
    let day = date.getDate();
    let month = date.getMonth() + 1;

    if (day < 10) {
      day = `0${day}`;
    } else {
      day = `${day}`;
    }

    if (month < 10) {
      month = `0${month}`;
    } else {
      month = `${month}`;
    }
    return `${day}/${month}`;
  }

  function getCompleteDate(d) {
    d = d * 1000;
    let date = new Date(d);
    let year = date.getFullYear();

    let days = getDayMonth(d);
    return `${days}/${year}`;
  }

  //receive a date, return in formate of Weekday hh:mm
  function getCompleteTime(d) {
    d = d * 1000;
    let date = new Date(d);
    let weekday = date.getDay();
    let week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let time = getHoursMinutes(d, 1);
    return `${week[weekday]} ${time}`;
  }

  //receive a date, return in hh:mm
  function getHoursMinutes(d, forecast) {
    let date;
    if (forecast === 0) {
      date = new Date(d);
    } else {
      //display the right current time
      date = new Date();
    }
    let hour = date.getHours();
    let minute = date.getMinutes();

    if (minute < 10) {
      minute = `0${minute}`;
    } else {
      minute = `${minute}`;
    }
    if (hour < 10) {
      hour = `0${hour}`;
    } else {
      hour = `${hour}`;
    }

    return `${hour}:${minute}`;
  }

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
        <button className="btn search-button" type="button">
          Forecast by Hours
        </button>
      </div>
    </form>
  );

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
    /*event.preventDefault();

    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);

      let apiURL = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=${unit}&lat=${latitude}&lon=${longitude}`;
      axios.get(apiURL).then(getData);
    });*/
  }

  function getStartedData() {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${tempCity}&appid=${apiKey}&units=${currentWeather.unit}`;
    axios.get(apiURL).then(getData);
  }

  function getData(response) {
    setCurrentWeather({
      city: response.data.name,
      date: getCompleteDate(response.data.dt),
      time: getCompleteTime(response.data.dt),
      degrees: Math.round(response.data.main.temp),
      image: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
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
        <Forecast />
      </div>
    );
  } else {
    getStartedData();
    return (
      <div className="Search">
        {form}
        Loading...
      </div>
    );
  }
}
