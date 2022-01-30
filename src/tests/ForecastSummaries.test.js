import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../components/ForecastSummaries";
import ForecastSummary from "../components/ForecastSummary";

describe("ForecastSummaries", () => {
  const validProps = {
    forecasts: [
      {
        date: 11111111,
        description: "stub description",
        icon: 800,
        temperature: {
          max: 22,
          min: 12,
        },
      },

      {
        date: 121212121212,
        description: "stub description2",
        icon: 602,
        temperature: {
          max: 26,
          min: 16,
        },
      },
    ],
    onForecastSelect: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummaries
        forecasts={validProps.forecasts}
        onForecastSelect={validProps.onForecastSelect}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders an array length of 2", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries
        forecasts={validProps.forecasts}
        onForecastSelect={validProps.onForecastSelect}
      />
    );

    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
