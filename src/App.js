import "./App.css";
// import Room from "./Components/Room";
import NavBar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="background-deg"></div>
      <div>
        <Home/>
      </div>
    </div>
  );
}

export default App;
