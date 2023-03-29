import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../api/api";

function Home() {
  const dispatch = useDispatch();
  const decrement = () => dispatch({ type: "DECREMENT" });
  const increment = () => dispatch({ type: "INCREMENT" });

  const counter = useSelector((state) => {
    console.log("state.count", state.counter.count);
    return state.counter.count;
  });

  return (
    <div className="App">
      <header className="App-header">
        Login page
        <Link to="/">Back to home</Link>
        <h1>Count: {counter}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </header>
    </div>
  );
}

export default Home;
