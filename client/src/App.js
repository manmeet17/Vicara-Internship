import React, { Component } from 'react';
import Landing from './components/home';
import PostsShow from "./components/post";
import PostsNew from './components/post_new';
import SignUpForm from './components/signup';
import LoginForm from './components/login';
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
        })
      }
    });
  }
  
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <div>
      <Switch>
        <Route exact path="/" component={SignUpForm} />
        <Route 
        exact 
        path="/login" 
        render={() => 
        <LoginForm _login={this._login} />
        } />
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
