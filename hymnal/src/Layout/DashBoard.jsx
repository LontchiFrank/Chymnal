import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import Table from "./Table";
// import { Card } from "react-bootstrap";
import Card from "./Card";
function DashBoard() {
  return (
    // <div className="container-fluid">
    //   <div className=" row row1 m-0 d-flex justify-content-center align-items-center">
    //     <div className="dash ">
    //       <div className="row fix d-flex flex-direction-column ">
    //         <div className="row tit">
    //           <h2>Dashboard</h2>
    //         </div>
    //         <div className="cardshow row">
    //           <Card icon={"fas fa-bible"} />
    //           <Card icon={"fas fa-cross fa-large "} />
    //           <Card icon={"fas fa-church fa-large "} />
    //           <Card icon={"fas fa-church fa-large "} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="paper-hold">
      <div className="card-paper">
        <div className="dash  ">
          <div className="row fix d-flex flex-direction-column m-0 p-0">
            <div className=" tit">
              <h2>Dashboard</h2>
            </div>
            <div className="hold-cardshow  ">
              <div className="cardshow col-lg-12 p-0  ">
                <Card icon={"fas fa-bible "} />
                <Card icon={"fas fa-cross fa-large "} />
                <Card icon={"fas fa-church fa-large "} />
                <Card icon={"fas fa-church fa-large "} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
