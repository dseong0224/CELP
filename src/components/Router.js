import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from '../App';
import Recipe from "./Recipe";
import About from "./About";
import Error from './Error';
import Navigation from './Navigation';

const Router = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/recipe/:id" component={Recipe} />
        <Route path="/about" component={About} />
        <Route component={Error} />
      </Switch>
    </div>

  </BrowserRouter>
)

export default Router;