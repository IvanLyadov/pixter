import { Link } from "react-router-dom";
import { useState } from "react";
import { signUp } from "../api/api";

function SignUp() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const [password, setPassword] = useState("");
  const [errorPass, setErrorPass] = useState(null);

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  };

  const handlePassChange = (event) => {
    if (event.target.value.length < 8) {
      setErrorPass("Password should contain min 8 characters");
    } else {
      setErrorPass(null);
    }

    setPassword(event.target.value);
  };

  const signUpHandel = () => {
    signUp(email, password);
  };

  return (
    <header className="App-header">
      <div className="flex m-auto h-[100vh]">
        <div className="w-full max-w-xs m-auto">
          <form
            id="form"
            aria-label="form"
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <h3 className="text-black">Registration</h3>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(event) => handleChange(event)}
              />
              <p className="text-red-500 text-xs italic">{error}</p>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                name="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => handlePassChange(event)}
              />
              <p className="text-red-500 text-xs italic">{errorPass}</p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => signUpHandel()}
              >
                Sign Up
              </button>
              <Link
                to="/login"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Login page
              </Link>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2023 Pixter.
          </p>
        </div>
      </div>
    </header>
  );
}

export default SignUp;
