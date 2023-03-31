import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function Login() {
  // const dispatch = useDispatch();
  // const decrement = () => dispatch({ type: "DECREMENT" });
  // const increment = () => dispatch({ type: "INCREMENT" });

  // const counter = useSelector((state) => {
  //   console.log("state.count", state.counter.count);
  //   return state.counter.count;
  // });

  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const [password, setPassword] = useState("");
  const [errorPass, setErrorPass] = useState(null);

  const handlePassChange = (event) => {
    if (event.target.value.length < 8) {
      setErrorPass("Password should contain min 8 characters");
    } else {
      setErrorPass(null);
    }

    setPassword(event.target.value);
  };

  const loginHandel = () => {
    console.log("login");
  };

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

  return (
    <div className="App">
      <header className="App-header">
        Login page
        {/* <Link to="/">Back to home</Link> */}
        {/* <h1>Count: {counter}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button> */}
        <div className="flex m-auto h-[100vh]">
          <div className="w-full max-w-xs m-auto">
            <form
              id="form"
              aria-label="form"
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4 text-left">
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
              <div className="mb-6 text-left">
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
                  onClick={() => loginHandel()}
                >
                  Login
                </button>
                <Link
                  to="/register"
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                >
                  No accunt?
                </Link>
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
              &copy;2023 Pixter.
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Login;
