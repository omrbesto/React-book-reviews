import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";

import Page6 from 'Page6/page6';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/testing" exact component={Page6} />
      <Route path="/landing" exact component={Landing} />
      <Route path="/index" exact component={Index} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/" exact component={Landing} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

