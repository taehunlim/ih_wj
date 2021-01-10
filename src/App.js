import {BrowserRouter, Route, Switch, Redirect, Link} from 'react-router-dom';
import '../src/assets/scss/app.scss'

import Home from "./screen/Home";
import React, {Fragment} from "react";
import classnames from "classnames";

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/" exact render={props => <Home {...props}/>}/>

              <Redirect to="/" />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
