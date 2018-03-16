import React,{Component} from 'react';

const User=(props) =>{
    console.log(props);
    console.log("User is: ",props.User);
    return (
        <div>User page</div>
    );
};

export default User;