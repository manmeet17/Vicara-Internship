import React,{ Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

export default class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            redirectTo: null
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        let target=event.target;
        let value=target.value;
        if(target.type==='radio'){
            value=value === "yes" ? true: false; 
        }
        const name=target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('Logging In with user: ',this.state);
        this.props._login(this.state.email,this.state.password);
        this.setState({
            redirectTo: '/home'
        });
    }

    render(){
        if(this.state.redirectTo){
            return <Redirect to={{pathname: this.state.redirectTo}} />;
        } else{
            return(
                <div className="loginForm">
                <h1>Login</h1>
                <form>
                <label htmlFor="email">Email id: </label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} /><br/>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br/>
                <button onClick={this.handleSubmit}>Login</button>      
                </form>
                </div>
            );
        }

    }
}