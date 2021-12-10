import React from "react";
import Sidebar from "./Sidebar";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
function GlobalLayout({ children }) {
  return (
    <div className="global-layout d-flex ">
      <style type="text/css">
        {`
         .flat {
            background-color: white;
            
         }
         
         `}
      </style>
      <div className="sidenav w-auto bg-warning">
        <Sidebar />
      </div>
      <div className="mainPage  ">
        <div className="navis ">
          <Navbar
            style={{ width: "100%", height: "100%", background: "white" }}
            collapseOnSelect
            expand="lg"
            bg="light"
            variant="light"
          >
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                  <Nav.Link href="#deets">More deets</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div className="page  d-flex justify-content-center align-items-center">
          {children}
        </div>
      </div>
    </div>
  );
}

export default GlobalLayout;
