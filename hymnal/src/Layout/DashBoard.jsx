import React from "react";
// import { Card } from "react-bootstrap";
import Card from "./Card";
function DashBoard() {
  return (
    <div className="container">
      <div className=" row row1">
        <div className="col-md-3"></div>
        <div className="col-md-9">
          <div className="row fix d-flex flex-direction-column">
            <div className="row tit">
              <h2>Dashboard</h2>
            </div>
            <div className="row cardshow">
              <Card icon={"fas fa-bible"} />
              <Card icon={"fas fa-cross fa-large "} />
              <Card icon={"fas fa-church fa-large "} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
