import React, { Component } from 'react';
import Landing from './components/home';
import PostsShow from "./components/post";
import PostsNew from './components/post_new';
import LoginForm from './components/login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <div>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/home" component={Landing} />
        <Route exact path="/posts/new" component={PostsNew} />
        <Route exact path="/posts/:id" component={PostsShow} />
        </Switch>
      </div> 
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
