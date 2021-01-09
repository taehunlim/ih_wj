import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import '../src/assets/scss/app.scss'

import Home from "./screen/Home";

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
