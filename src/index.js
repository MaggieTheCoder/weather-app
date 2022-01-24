import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import location from "./data/forecast.json";

ReactDOM.render(
  <React.StrictMode>
    <App forecasts={location.forecasts} location={location.location} />
  </React.StrictMode>,
  document.getElementById("root")
);
