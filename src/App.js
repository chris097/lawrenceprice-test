import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Redirect
} from "react-router-dom";
import './App.css';
import './index.css';
import { Shop } from './pages/Shop';
import { Waitlist } from './pages/Waitlist';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/waitlist" exact>
          <Waitlist />
        </Route>
        <Route path="/shop" exact>
          <Shop />
        </Route>
        <Redirect to="/waitlist" exact />
      </Switch>
    </Router>
  );
}

export default App;
