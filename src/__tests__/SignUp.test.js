import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SignUp from "../Components/SignUp";

const setup = () => {
  render(
    <MemoryRouter>
      <SignUp />
    </MemoryRouter>
  );
};

test("should load form fields", () => {
  setup();
  expect(screen.getByRole("textbox", { name: "Username" })).toBeInTheDocument();
  expect(screen.getByRole("textbox", { name: "Email" })).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Sign Up" })).toBeInTheDocument();
});
