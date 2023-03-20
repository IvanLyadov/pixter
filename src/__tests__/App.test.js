import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

test("renders register form to home page", () => {
  render(
    <MemoryRouter initialEntries={["/register"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByRole("form")).toBeInTheDocument();
});

test("should display not found page on bad route", () => {
  const badRoute = "/bad/route";

  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/Not found/i)).toBeInTheDocument();
});
