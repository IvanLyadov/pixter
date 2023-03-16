import { Link } from "react-router-dom";

function Home() {
    return (
      <div className="App">
          <header className="App-header">
              Login page
              <Link to="/">Back to home</Link>
        </header>
      </div>
  
    );
  }
  
  export default Home;
  