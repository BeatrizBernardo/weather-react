import React from "react";
import "./css/PartialDate.css";
export default function PartialDate(props) {
  //receive a date, return in dd/mm

  let date = new Date(props.date);
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

  return (
    <div className="PartialDate">
      {day}/{month}
    </div>
  );
}
