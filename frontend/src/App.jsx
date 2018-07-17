import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Explorer from './components/Explorer';
import Journey from './components/Journey';
import NotFound from './components/404';
import Questions from './components/Journey/Questions';
import WhatIsDepression from './components/Journey/WhatIsDepression';
import Persona from './components/Journey/Persona';
import Map from './components/Journey/Map';
import Comparison from './components/Journey/Comparison';



const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/:path(|index|home)" component={Home} />
      <Route exact path="/:path(explorer)" component={Explorer} />
      <Route exact path="/:path(journey)" component={Journey} />
      <Route exact path="/:path(journey)/:path(questions)" component={Questions} />
      <Route exact path="/:path(journey)/:path(whatisdepression)" component={WhatIsDepression} />
      <Route exact path="/:path(journey)/:path(persona)" component={Persona} />
      <Route exact path="/:path(journey)/:path(comparison)" component={Comparison} />
      <Route exact path="/:path(journey)/:path(map)" component={Map} />


      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
