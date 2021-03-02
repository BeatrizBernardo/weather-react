import React, { useState } from "react";
import axios from "axios";
import DisplayData from "./DisplayData";
import Forecast from "./Forecast";

import "./css/Search.css";

export default function Search() {
  const [city, setCity] = useState("Lisbon");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [degrees, setDegrees] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const [unit, setUnit] = useState("metric");
  const [loaded, setLoaded] = useState(false);

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
    <form>
      <div className="group-form search-form">
        <input
          type="text"
          placeholder="Type the city here"
          className="form-control search-field"
        />
        <button className="btn search-button" type="submit">
          <i className="fas fa-search"></i>
        </button>
        <button className="btn search-button" type="button">
          Current City
        </button>
        <button className="btn search-button" type="button">
          Forecast by Hours
        </button>
      </div>
    </form>
  );

  function getStartedData() {
    let apiKey = "8e6bcc493a1dde09d842b31c9a0c6dba";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiURL).then(getData);
  }

  function getData(response) {
    console.log("Getting the data from axios");
    setCity(response.data.name);
    setDate(getCompleteDate(response.data.dt));
    setTime(getCompleteTime(response.data.dt));
    setDegrees(Math.round(response.data.main.temp));
    setImage(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    setDescription(response.data.weather[0].description);
    setWind(Math.round(response.data.wind.speed));
    setHumidity(Math.round(response.data.main.humidity));
    setLoaded(false);
    {
      console.log(
        `....data  ${city} / ${date} / ${time} / ${degrees} / ${humidity} / ${wind}`
      );
    }
  }

  if (loaded) {
    return (
      <div className="Search">
        {form}
        <DisplayData
          city={city}
          date="19/02/2021"
          time="Friday 20:00"
          degrees={19}
          image="☀"
          description="sunny"
          wind={2}
          humidity={10}
        />
        <Forecast />
      </div>
    );
  } else {
    getStartedData();
    return (
      <div className="Search">
        {form}
        <DisplayData
          city={city}
          date={date}
          time={time}
          degrees={degrees}
          image={image}
          description={description}
          wind={wind}
          humidity={humidity}
        />
        <Forecast />
      </div>
    );
  }
}
