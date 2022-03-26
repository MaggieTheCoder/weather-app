import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "../styles/ForecastDetails.css";

const ForecastDetails = ({ forecast }) => {
  const { date, temperature, humidity, wind } = forecast;
  return (
    <div className="forecast-details" forecast={forecast}>
      <div>
        <h3 className="forecast-details__date">
          {moment(date).format("ddd Do MMM")}
        </h3>
      </div>
      <div
        className="forecast-details__temperature"
        data-testid="forecast-temperature"
      >
        Maximum Temperature: {temperature.max}&deg;C
        <br />
        Minimum Temperature: {temperature.min}&deg;C
      </div>
      <div
        className="forecast-details__humidity"
        data-testid="forecast-humidity"
      >
        Humidity: {humidity}%
      </div>
      <div className="forecast-details__wind" data-testid="forecast-wind">
        Wind: {wind.speed} kmh
        <br />
        Wind direction: {wind.direction}
      </div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }),
    humidity: PropTypes.number,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
  }).isRequired,
};

export default ForecastDetails;
