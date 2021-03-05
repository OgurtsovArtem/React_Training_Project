import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Main from '../pages/Main';
import NotFound404 from './NotFound404/NotFound404'

import './App.css';

function App() {
  return (
    <Switch>
    <Route exact path="/">
        <Main />
      </Route>
      <Route path="*">
        <NotFound404 />
      </Route>
    </Switch>
  );
}

export default App; 