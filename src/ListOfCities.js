import React from "react";

import "./css/ListOfCities.css";
import DisplayData from "./DisplayData";

export default function ListOfCities() {
  return (
    <div className="ListOfCities">
      <div className="card card-cities">
        <h5 className="card-cities-title">See the weather in this cities</h5>
        <ul className="list-group list-cities">
          <li className="list-group-item list-cities-item">
            <a className="cities" href="/">
              Lisbon
            </a>
          </li>
          <li className="list-group-item list-cities-item">
            <a className="cities" href="/">
              Madrid
            </a>
          </li>
          <li className="list-group-item list-cities-item">
            <a className="cities" href="/">
              Paris
            </a>
          </li>
          <li className="list-group-item list-cities-item">
            <a className="cities" href="/">
              Rome
            </a>
          </li>
          <li className="list-group-item list-cities-item">
            <a className="cities" href="/">
              London
            </a>
          </li>
          <li className="list-group-item list-cities-item">
            <a className="cities" href="/">
              Ankara
            </a>
          </li>
          <li className="list-group-item list-cities-item">
            <a className="cities" href="/">
              Cairo
            </a>
          </li>
          <li className="list-group-item list-cities-item">
            <a className="cities" href="/">
              Tokyo
            </a>
          </li>
          <li className="list-group-item list-cities-item">
            <a className="cities" href="/">
              New Delhi
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
