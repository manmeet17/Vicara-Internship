import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Landing from './components/home';
import Home from './components/landing';
import PostsShow from "./components/post";
import PostsNew from './components/post_new';
import SignUpForm from './components/signup';
import LoginForm from './components/login';
import User from './components/user';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loggedIn: false,
      user: null
    }

  this._login=this._login.bind(this);
  this._logout=this._logout.bind(this);
  
  }
  _login(email,password){
    axios.post('/auth/login',{
      email,
      password
    }).then(res => {
      console.log("Response from server: ",res);
      if(res.status===200){
        this.setState({
          loggedIn: true,
          user: res.data.user
        });
      }
      console.log("Fucking state: ",this.state);      
    });
  }

  _logout(event){
    event.preventDefault();
    console.log("logging out");
    axios.post('/auth/logout').then((res) =>{
      console.log(res.data);
      if(res.status===200){
        this.setState({
          loggedIn: false,
          user: null
        });
      }
    });
  }
  
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route 
        exact 
        path="/login" 
        render={() => 
        <LoginForm _login={this._login} />
        } />
        <Route exact path="/user" render={ () => 
        <User user={this.state.user} />
        } />
        <Route exact path="/home"
        render={ () => 
          <Landing loggedIn={this.state.loggedIn} user={this.state.user} />
        } />
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
