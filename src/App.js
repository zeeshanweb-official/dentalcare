import React from 'react';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/about"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>

      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>


  );
}

export default App;
