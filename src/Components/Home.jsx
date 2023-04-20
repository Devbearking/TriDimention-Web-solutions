import React from "react";
import Room from "./Room";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-left">
            <h1 className="MainText">Transform Your Online Presence with <span className="coName">TriDimension Web Solutions</span></h1>
            {/* <h3 className="MainText">Where 3D Animations and Web Development Meet</h3> */}
          </div>
          <div className="col col-right"><Room/></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
