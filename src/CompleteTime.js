import React from "react";
import PartialTime from "./PartialTime";

export default function CompleteTime(props) {
  //receive a date, return in formate of Weekday hh:mm

  let d = props.date * 1000;
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
  let time = <PartialTime date={d} forecast={1} />;

  return (
    <div className="CompleteTime">
      {week[weekday]} {time}
    </div>
  );
}
