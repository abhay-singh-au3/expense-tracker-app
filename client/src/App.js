import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing/Landing';
import Home from './pages/Home/Home';
import withAuth from './components/withAuth/withAuth';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={withAuth(Home)} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
