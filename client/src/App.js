import React, { Component } from 'react';
import Landing from './components/home';
import PostsShow from "./components/post";
import PostsNew from './components/post_new';
import SignUpForm from './components/signup';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  
  _login(email,password){
    axios.post('http://localhost:3001/auth/signup',{
      email,
      password
    })

  }
  
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <div>
      <Switch>
        <Route exact path="/" component={SignUpForm} />
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
