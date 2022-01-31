import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../components/SearchForm";

describe("SearchForm", () => {
  const validProps = {
    searchText: "",
    setSearchText: () => {},
    onSubmit: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.onSubmit}
        onSubmit={validProps.onSubmit}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays button text correctly", () => {
    const { getByText } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.onSubmit}
        onSubmit={validProps.onSubmit}
      />
    );
    expect(getByText("Search")).toHaveClass("search-form__button");
  });
});
