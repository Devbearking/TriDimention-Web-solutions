import React from "react";
import Logo from "../Images/TriLogo.png"
// import Home from "./Home";

function NavBar() {
  return (
      <nav className="navbar">
        <div className="container-fluid bar">
          <a className="navbar-brand" href="/Home">
            <img
              src={Logo}
              alt=""
              width="70%"
              className="d-inline-block align-text-top"
            />
          </a>
        </div>
      </nav>
  );
}
export default NavBar;
