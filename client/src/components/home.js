import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {fetchPosts} from '../action';
import _ from 'lodash';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AI from './assets/AI.png';
import './assets/home.css';
import { relative } from 'path';

class Landing extends Component{
    
    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPost(){
        return _.map(this.props.posts,post => {
            return (
                <li className="list-group-item" key={post.id}>
                <div className="col-lg-6 imageContainer">
                <img src={AI} alt="AI" />
                </div><br/>
                <h3>Title:  {post.title}</h3>  <br/>
                <p>Content: {post.content}</p>
                <Link to={`/posts/${post.id}`}>
                <button className="btn btn-primary">Read More!</button>
                </Link>
                </li>
            );
        });
    }

    render(){
        return (
            <div style={{textAlign: 'center'}}>
            <h1>Blog</h1>
            <div className="container">
            <ul className="list-group">
            {this.renderPost()}
            </ul>
            </div>
            </div>
        );
};
}

function mapStateProps(state){
    return {posts: state.posts};
}

export default connect(mapStateProps,{fetchPosts})(Landing);