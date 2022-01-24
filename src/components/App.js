import React from "react";
import "../styles/App.css";
import propTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";

const App = ({ location, forecasts }) => {
  return (
    <div className="App">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries forecasts={forecasts} />
    </div>
  );
};

App.propTypes = {
  forecasts: propTypes.arrayOf(
    propTypes.shape({
      date: propTypes.number,
      description: propTypes.string,
      icon: propTypes.string,
      temperature: propTypes.shape({
        max: propTypes.number,
        min: propTypes.number,
      }),
    })
  ).isRequired,
  location: propTypes.shape({
    city: propTypes.string,
    country: propTypes.string,
  }).isRequired,
};
export default App;
