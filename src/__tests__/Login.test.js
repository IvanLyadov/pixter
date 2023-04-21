import { render, fireEvent, screen } from "@testing-library/react";
import Login from "../Components/Login";
import { BrowserRouter as Router } from "react-router-dom";

test("Email input change and error handling", () => {
  render(
    <Router>
      <Login />
    </Router>
  );

  const emailInput = screen.getByLabelText("Email");
  fireEvent.change(emailInput, { target: { value: "invalidemail" } });

  const errorText = screen.getByText("Email is invalid");
  expect(errorText).toBeInTheDocument();
});

test("Password input change and error handling", () => {
  render(
    <Router>
      <Login />
    </Router>
  );

  const passwordInput = screen.getByLabelText("Password");
  fireEvent.change(passwordInput, { target: { value: "pass" } });

  const errorText = screen.getByText(
    "Password should contain min 8 characters"
  );
  expect(errorText).toBeInTheDocument();
});
