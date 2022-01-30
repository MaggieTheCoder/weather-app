import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import data from "../data/forecast.json";

test("renders application", () => {
  render(<App location={data.location} forecasts={data.forecasts} />);
  const location = screen.getByText(/Manchester, UK/i);
  expect(location).toBeInTheDocument();
});
