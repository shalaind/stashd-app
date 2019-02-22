import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Intro from './components/Walkthrough/Intro';
import Signup from './components/User/Signup';
import Welcome from './components/Walkthrough/Welcome';
import SelectCat from './components/Walkthrough/SelectCat';
import NewCat from './components/Categories/AddCat';
import AddStashItem from './components/StashItems/AddStashItem';
import ViewCats from './components/Categories/ViewCats';
import StashItemList from './components/StashItems/StashItemList';
import Profile from './components/User/Profile';




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
                  <Route exact path="/view-categories" component={ViewCats} />
                  <Route exact path="/add-stash-item" component={AddStashItem} />
                  <Route exact path="/stash-item-list" component={StashItemList} />
                  <Route exact path="/profile" component={Profile} />
                </Switch>
              </div>
      </Router>
      </div>
    );
  }
}

export default App;
