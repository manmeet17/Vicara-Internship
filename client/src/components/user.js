import React,{Component} from 'react';

const User=(props) =>{
    if(props.user){
        return (
            <div className="container">
            <div>User page</div>
            <h1>Hello {props.user.name}</h1>
            </div>
        );
    }
    else{
        return (
            <div className="container">
            <h1>Please Login to access User Page</h1>
            </div>
        );
    }
    
};

export default User;