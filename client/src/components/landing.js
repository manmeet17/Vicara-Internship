import { Link } from 'react-router-dom';
import React from 'react';

const Home = (props) =>{
    return (
        <div className="container">
        <h1>Welcome to the Blog</h1>
        <Link to="/login">
        <button className="btn btn-lg btn-dark">Login</button>
        </Link>
        <Link to="/signup">
        <button className="btn btn-lg btn-info">Sign Up</button>
        </Link>
        </div>
    );
}

export default Home;