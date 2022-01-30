import React from "react";
import { getByText, render } from "@testing-library/react";
import ForecastDetails from "../components/ForecastDetails";

describe("ForecastDetails", () => {
  const forecast = {
    date: 11111111,
    temperature: {
      min: 12,
      max: 22,
    },
    humidity: 32,
    wind: {
      speed: 12,
      direction: "e",
    },
  };

  it("renders component correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={forecast} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastDetails forecast={forecast} />
    );

    expect(getByText("Thu 1st Jan")).toHaveClass("forecast-details__date");
    expect(getByTestId("forecast-temperature")).toHaveClass(
      "forecast-details__temperature"
    );
    expect(getByTestId("forecast-humidity")).toHaveClass(
      "forecast-details__humidity"
    );
    expect(getByTestId("forecast-wind")).toHaveClass("forecast-details__wind");
  });
});
