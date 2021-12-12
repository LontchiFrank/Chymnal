import React, { useEffect } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import Table from "./Table";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getHymns } from "../Component/actions/hymn";
import Card from "./Card";

function DashBoard({ getHymns, hymn: { hymns } }) {
  useEffect(() => {
    getHymns();
  }, [getHymns]);
  console.log(hymns.getAll);
  const ListHymns = hymns.getAll.map((userHymn) => (
    <Card userHymn={userHymn} />
  ));
  return (
    <div className="paper-hold">
      <div className="card-paper">
        <div className="dash  ">
          <div className="row fix d-flex flex-direction-column m-0 p-0">
            <div className=" tit">
              <h3>Dashboard</h3>
            </div>
            <div className="hold-cardshow p-0 ">
              <div className="cardshow row  ">
                {/* <Card icon={"fas fa-bible "} />
                <Card icon={"fas fa-cross fa-large "} />
                <Card icon={"fas fa-church fa-large "} />
                <Card icon={"fas fa-church fa-large "} />
                <Card icon={"fas fa-church fa-large "} />
                <Card icon={"fas fa-cross fa-large "} /> */}
                {ListHymns}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

DashBoard.propTypes = {
  getHymns: PropTypes.func.isRequired,
  hymn: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  hymn: state.hymn,
});
export default connect(mapStateToProps, { getHymns })(DashBoard);
