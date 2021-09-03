import React from "react";
// import { Card, Button } from "react-bootstrap";
function Card({ icon }) {
  return (
    <div className="cards mr-5 d-flex justify-content-center align-items-center">
      <i className={icon} style={{ fontSize: "2em", color: "#b5179e" }}>
        {" "}
      </i>
    </div>
  );
}

export default Card;
