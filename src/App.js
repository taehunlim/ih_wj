import {BrowserRouter, Route, Switch, Redirect, } from 'react-router-dom';

import Home from "./screen/Home";
import SectionOne from "./screen/SectionOne";
import SectionTwo from "./screen/SectionTwo";
import SectionThree from "./screen/SectionThree";
import ScrollToTop from "./components/scrollToTop";

import '../src/assets/scss/app.scss'


function App() {
  return (
      <BrowserRouter>
          <ScrollToTop/>
          <Switch>
              <Route path="/" exact render={props => <Home {...props}/>}/>
              <Route path="/section/1/:id" render={props => <SectionOne {...props}/>}/>
              <Route path="/section/2/:id" render={props => <SectionTwo {...props}/>}/>
              <Route path="/section/3/:id" render={props => <SectionThree {...props}/>}/>
              <Redirect to="/" />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
