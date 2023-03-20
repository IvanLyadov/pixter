import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../Components/Home";

test("renders Hello World", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const text = screen.getByText(/Hello world/i);
  expect(text).toBeInTheDocument();
});
