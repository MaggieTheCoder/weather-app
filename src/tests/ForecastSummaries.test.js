import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../components/ForecastSummaries";
import ForecastSummary from "../components/ForecastSummary";

describe("ForecastSummaries", () => {
  const validProps = [
    {
      date: 11111111,
      description: "stub description",
      icon: "stubIcon1",
      temperature: {
        max: 22,
        min: 12,
      },
    },

    {
      date: 121212121212,
      description: "stub description2",
      icon: "stubIcon2",
      temperature: {
        max: 26,
        min: 16,
      },
    },
  ];

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
