import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import ObservationIndex from './components/ObservationIndex';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/observation" component={ObservationIndex} exact />
      </Switch>
    </main>
  );
}

export default App;
