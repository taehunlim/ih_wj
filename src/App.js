import {BrowserRouter, Route, Switch, Redirect, } from 'react-router-dom';

import Home from "./screen/Home";
import ColorOfLife from "./screen/ColorOfLife";
import SectionOne from "./screen/SectionOne";
import SectionTwo from "./screen/SectionTwo";

import '../src/assets/scss/app.scss'

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/" exact render={props => <Home {...props}/>}/>
              <Route path="/coloroflife/:id" render={props => <ColorOfLife {...props}/>}/>
              <Route path="/sectionone/:id" render={props => <SectionOne {...props}/>}/>
              <Route path="/sectiontwo/:id" render={props => <SectionTwo {...props}/>}/>
              <Redirect to="/" />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
