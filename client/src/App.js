import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Intro from './components/Walkthrough/Intro';
import Signup from './components/User/Signup';
import Welcome from './components/Walkthrough/Welcome';
import SelectCat from './components/Walkthrough/SelectCat';
import NewCat from './components/Categories/AddCat';




class App extends Component {
  render() {
    return (
      <div>
         <Router>
        <div>      
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route exact path="/sign-up" component={Signup} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/select-categories" component={SelectCat} />
            <Route exact path="/add-category" component={NewCat} />
            <Route exact path="/merch/astro-denim-jacket" component={AstroDenimJacket} />
            <Route exact path="/merch/astro-tie-dye-tshirt" component={AstroTieDye} />
            <Route exact path="/merch/thrills-and-chills-hoodie" component={ThrillsAndChillsHoodie} />
            <Route exact path="/merch/thrills-and-chills-pants" component={ThrillsAndChillsPants} />

            <Route exact path="/listening-party" component={ListeningParty} />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
