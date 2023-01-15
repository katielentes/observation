import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import ObservationIndex from './components/ObservationIndex';

function App() {
  return (
    <main className="py-4 px-6 is-flex is-flex-direction-column is-justify-content-center has-background-warning-light is-max-desktop">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/:observationId" component={ObservationIndex} exact />
      </Switch>
    </main>
  );
}

export default App;
