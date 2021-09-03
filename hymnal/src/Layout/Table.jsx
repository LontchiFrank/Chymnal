import React from "react";
import MyModal from "./MyModal";

function Table() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="container">
      <div className="row big-row">
        <div className="col-md-3 d-flex justify-content-center align-items-center">
          <div className="hold border-end border-2">
            <h3>Content Tables</h3>
            <div className=" boite1 d-flex border-bottom border-3 ">
              <h4 className="text-align-center pt-2">Create Hymnal</h4>

              <button
                className="icon-box ml-2"
                onClick={() => setModalShow(true)}
              >
                <i className="fa fa-plus fa-large "></i>
              </button>
            </div>
            <div className=" boite d-flex border-bottom border-3">
              <h4 className="text-align-center pt-2">Vespers & Ben.</h4>

              <button
                className="icon-box ml-2"
                onClick={() => setModalShow(true)}
              >
                <i className="fa fa-plus fa-large "></i>
              </button>
            </div>
            <MyModal show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </div>
        <div className="col-md-9"></div>
      </div>
    </div>
  );
}

export default Table;
