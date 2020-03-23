import React, { Component } from 'react';
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import About from './components/About';
import News from './components/News';
import ReachUs from './components/ReachUs';
import Footer from './components/Footer';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="AppBody" id="AppBody">
          <HashRouter basename="">
            <Navbar />
            <Switch>
              <Route path="/portfolio">
                <Portfolio />
                <Footer />
              </Route>
              <Route path="/team">
                <Team />
                <Footer />
              </Route>
              <Route path="/about">
                <About />
                <Footer />
              </Route>
              <Route path="/news">
                <News />
                <Footer />
              </Route>
              <Route path="/reach-us">
                <ReachUs />
                <Footer />
              </Route>
              
              <Route path="/">
                <Homepage />
              </Route>
            </Switch>

          </HashRouter>
        </div>
        

      </div>
    )
  }
}

export default App
