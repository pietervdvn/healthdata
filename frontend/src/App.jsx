import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Explorer from './components/Explorer';
import Journey from './components/Journey';
import NotFound from './components/404';
import Questions from './components/Journey/Questions';
import Persona from './components/Journey/Persona';
import Map from './components/Journey/Map';
import Comparison from './components/Journey/Comparison';



class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value1: "val1",
  //     value2: "2",
  //     value3: "tes3"
  //   }
  // }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/:path(|index|home)" component={Home} />
          <Route exact path="/:path(explorer)" component={Explorer} />
          <Route exact path="/:path(journey)" component={Journey} />
          <Route exact path="/:path(journey)/:path(questions)" component={Questions} />
          <Route exact path="/:path(journey)/:path(persona)" component={Persona} />
          <Route exact path="/:path(journey)/:path(comparison)" component={Comparison} />
          <Route exact path="/:path(journey)/:path(map)" component={Map} />

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}


export default App;
