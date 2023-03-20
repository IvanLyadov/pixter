import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="App">
      <header className="App-header">
        <p>404 Not Found</p>
        <Link to="/">Back to home</Link>
      </header>
    </div>
  );
}

export default NotFound;
