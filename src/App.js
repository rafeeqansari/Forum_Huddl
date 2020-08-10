import React, { Component } from 'react';
import './App.css';
import { MainPageContainer } from './components/mainPage.Container';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { SinglePostContainer } from "./components/singlePost.Container";
import NavBar from "./shared/navBar"



class App extends Component {


  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={MainPageContainer} />
          <Route path="/post/:id" component={SinglePostContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
