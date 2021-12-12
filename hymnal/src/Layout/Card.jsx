import React from "react";
// import { Card, Button } from "react-bootstrap";
function Card({ userHymn }) {
  const colors = [
    "#E7D6F5",
    "#F5D6EE",
    "#E5BBBB",
    "#F5EAD6",
    "#D6E4F5",
    "#E2F5D6",
  ];
  const txtColor = ["#E5BBBB", "#F5EAD6", "#D6E4F5", "#E2F5D6"];
  var sgColor = Math.floor(Math.random() * colors.length);
  var txColor = Math.floor(Math.random() * txtColor.length);
  console.log(userHymn);
  return (
    <div className="cards mb-3 col-lg-3 col-md-6 d-flex flex-column justify-content-center align-items-center p-0">
      <div className="card-headers px-4 py-3 d-flex justify-content-start ">
        <div
          className="hymnNum d-flex justify-content-center align-items-center"
          style={{ backgroundColor: colors[sgColor] }}
        >
          {/* {userHymn.HymneNo} */}
          <h4 className="m-0 py-2 px-2">{userHymn.HymneNo}</h4>
        </div>
      </div>
      <div className="card-body">
        <div className="topic">
          {/* {userHymn.title} */}
          <h2>{userHymn.title}</h2>
        </div>
        <div className="corp">
          <p>Christ is my rock, my refuge, my stronghold...</p>
        </div>
      </div>
      <div className="card-footers px-4 py-2 d-flex justify-content-start align-items-end">
        <div
          className="foot px-3 py-2"
          style={{ backgroundColor: txtColor[txColor] }}
        >
          <h2 className="m-0">{userHymn.category}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
