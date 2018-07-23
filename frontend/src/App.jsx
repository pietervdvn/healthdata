import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Explorer from './components/Explorer';
import Journey from './components/Journey';
import NotFound from './components/404';



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/:path(|index|home)" component={Home} />
          <Route exact path="/:path(explorer)" component={Explorer} />
          <Route exact path="/:path(journey)" component={Journey} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}


export default App;
