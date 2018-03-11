import React,{ Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

export default class SignUpForm extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            password:'',
            admin: false,
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
        axios.post('/auth/signup',{
            email: this.state.email,
            name: this.state.name,
            password: this.state.password,
            admin: this.state.admin,
        })
        .then(res => {
            console.log(res);
            if(!res.data.error){
                console.log("Good to go");
                this.setState({
                    redirectTo: '/home'
                });
            }else{
                console.log("Duplicate");
            }
        });
    }

    render(){
        if(this.state.redirectTo){
            return <Redirect to={{pathname: this.state.redirectTo}} />;
        } else{
            return(
                <div className="loginForm">
                <h1>Sign Up</h1>
                <form>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /><br/>
                <label htmlFor="email">Email id: </label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} /><br/>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br/>
                <label htmlFor="admin">Admin or Not: </label><br />
                <input type="radio" name="admin" value="yes" onChange={this.handleChange} />Yes<br/>
                <input type="radio" name="admin" value="no" onChange={this.handleChange} />No<br />
                <button onClick={this.handleSubmit}>Sign Up</button>      
                </form>
                </div>
            );
        }

    }
}