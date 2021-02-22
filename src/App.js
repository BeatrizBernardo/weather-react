import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import ListOfCities from "./ListOfCities";
import Author from "./Author";

import "./css/App.css";

export default function App() {
  return (
    <div className="App">
      <div className="row">
        <img src="./images/11.jpg" alt="" />
        {/*Mudar as frases consuante o tempo */}
        <h1 className="title">Lets see how warm is today!</h1>

        {/**left side */}
        <div className="col-sm-8 left-column">
          <Search />
        </div>

        {/**right side */}
        <div className="col-sm-4 right-column">
          <ListOfCities />
          <Author />
        </div>
      </div>
    </div>
  );
}