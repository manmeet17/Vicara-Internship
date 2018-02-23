import React, { Component } from 'react';
import Landing from './components/home';
import PostsShow from "./components/post";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <div>
        <Route exact path="/" component={Landing} />
        <Route exact path="/posts/:id" component={PostsShow} />
      </div> 
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
