import React from 'react'
import { Route, Switch } from 'react-router-dom';
// PAGES
import Main from '../pages/Main';
import Blog from '../pages/Blog';
import AboutUs from '../pages/AboutUs';
import Gallery from '../pages/Gallery';
import NotFound404 from './NotFound404/NotFound404'

import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route  path="/about-us">
        <AboutUs />
      </Route>
      <Route  path="/blog">
        <Blog />
      </Route>
      <Route  path="/gallery">
        <Gallery />
      </Route>
      <Route path="*">
        <NotFound404 />
      </Route>
    </Switch>
  );
}

export default App; 