import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../../components/LocationDetails";

describe("LocationDetails", () => {
  it("renders the correct city and location props", () => {
    const { getByText } = render(
      <LocationDetails city="Cape Town" country="South Africa" />
    );
    expect(getByText("Cape Town, South Africa")).toHaveClass(
      "location-details"
    );
  });
});
