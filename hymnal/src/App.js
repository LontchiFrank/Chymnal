import "./App.css";
import React, { useEffect } from "react";
import Sidebar from "./Layout/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Component/Auth/Login";
import Alert from "./Layout/Alert";
import store from "./store";
import setAuthToken from "./Component/utils/setAuthToken";
import { Provider } from "react-redux";
import { Fragment } from "react";
// import { loadUser } from "./Component/actions/auth";
import PrivateRoute from "./Component/routing/PrivateRoute";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  // useEffect(() => {
  //   store.dispatch(loadUser());
  // }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Alert />
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Sidebar} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
