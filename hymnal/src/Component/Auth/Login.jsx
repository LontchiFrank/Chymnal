import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
// import { login } from "../actions/auth";
import { setAlert } from "../actions/alert";
import PropTypes from "prop-types";
function Login({ login, isAuthenticated, setAlert }) {
  const [formData, setformData] = useState({
    name: "",
    password: "",
  });
  const { name, password } = formData;

  const onchange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const onsubmit2 = (e) => {
    e.preventDefault();
    login({ name, password });
    setAlert("Login Success", "success");
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="main-box d-flex justify-content-center align-items-center">
      <style type="text/css">
        {`
         .btn-flat {
           background-color: #b5179e;
           
           color: white;
           box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
         }
         
         .btn-grad {background-image: linear-gradient(to right, #AA076B 0%, #61045F  51%, #AA076B  100%)}
         .btn-grad {
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
          }

          .btn-grad:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
         
         .btn-flat2 {
            background-color: #168aad;
            color: white;
            box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
          }
     
    
         .btn-xl {
          width:170px;
          height:50px;
          padding-bottom:10px;
          margin:1em;
         }
         `}
      </style>
      <div className="box">
        <Form onSubmit={(e) => onsubmit2(e)}>
          <h2 className="l1 ">Admin Login</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              name="name"
              value={name}
              onChange={(e) => onchange(e)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onchange(e)}
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <div className="l2 d-flex justify-content-center align-items-center">
            <Button className="bot" variant="grad" size="xl" type="submit">
              Submit
            </Button>
          </div>

          <p className="social-text">Or Sign up with social platforms</p>
          <div className="social-media">
            <a href="#!" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="social-icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="#!" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </Form>
      </div>
    </div>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

// export default connect(mapStateToProps, { login, setAlert })(Login);
