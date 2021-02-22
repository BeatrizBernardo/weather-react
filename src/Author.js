import React from "react";

import "./css/Author.css";

export default function Author() {
  return (
    <div className="Author">
      <span className="open-source">
        <a
          href="https://github.com/BeatrizBernardo/my-weather-app-shecodes"
          className="open-source-links"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/beatriz-bernardo-a92b6286/"
          className="open-source-links"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          by Beatriz Bernardo
        </a>{" "}
        @2021
      </span>
    </div>
  );
}
