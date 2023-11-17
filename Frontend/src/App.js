/**
 * Main component that sets up the React application with routing and Redux store.
 * @module App
 */

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Activate from "./containers/Activate";
import ResetPassword from "./containers/ResetPassword";
import ResetPasswordConfirm from "./containers/ResetPasswordConfirm";

import { Provider } from "react-redux";
import store from "./store";

import Layout from "./hocs/Layout";
import Terms from "./containers/Terms";
import PrivacyPolicy from "./containers/PrivacyPolicy";

/**
 * The main App component that configures the application's routing and provides the Redux store.
 * @function
 * @returns {JSX.Element} - The root React element representing the App component.
 */
const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route
            exact
            path="/password/reset/confirm/:uid/:token"
            component={ResetPasswordConfirm}
          />
          <Route exact path="/activate/:uid/:token" component={Activate} />
          <Route exact path="/about" component={Home} />
          <Route path="/terms_and_conditions" component={Terms} />
          <Route path="/privacy_policy" component={PrivacyPolicy} />
        </Switch>
      </Layout>
    </Router>
  </Provider>
);

export default App;
