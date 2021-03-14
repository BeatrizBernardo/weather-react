import React from "react";
import "./css/PartialTime.css";

export default function PartialTime(props) {
  let date;
  if (props.forecast === 0) {
    date = new Date(props.date);
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
  return (
    <div className="PartialTime">
      {hour}:{minute}
    </div>
  );
}
