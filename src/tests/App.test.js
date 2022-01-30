import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

xtest("renders application", () => {
  render(
    <App
      LocationDetails={{
        location: { city: "Cape Town", country: "South Africa" },
         }}

      ForecastDetails={{
        forecasts={forecasts}
      }}
    />

  );
  const location = screen.getByText(/Weather App/i);
  expect(location).toBeInTheDocument();
});
