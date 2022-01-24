import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

xtest("renders learn react link", () => {
  render(
    <App
      LocationDetails={{
        location: { city: "Cape Town", country: "South Africa" },
      }}
    />
  );
  const linkElement = screen.getByText(/Weather App/i);
  expect(linkElement).toBeInTheDocument();
});
