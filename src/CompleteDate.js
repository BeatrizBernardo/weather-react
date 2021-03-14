import React from "react";
import PartialDate from "./PartialDate.js";
import "./css/CompleteDate.css";

export default function CompleteDate(props) {
  let d = props.date * 1000;
  let date = new Date(d);
  let year = date.getFullYear();

  let days = <PartialDate date={d} />;

  return (
    <div className="CompleteDate">
      {days}/{year}
    </div>
  );
}
