import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {fetchPosts} from '../action';
import _ from 'lodash';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/home.css';

class Landing extends Component{
    
    componentDidMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(props){
        console.log("Received props: ",props);
    }

    renderPost(){
        return _.map(this.props.posts,post => {
            return (
                <li className="list-group-item" key={post._id}>
                <div className="col-lg-6 imageContainer">
                <img src={post.imgLink} style={{width: '300px', height: "300px"}} alt="" />
                </div><br/>
                <h3>{post.title}</h3>  <br/>
                <p>{post.content}</p>
                <span className="likes"><i className="fa fa-thumbs-up"></i>{post.meta.likes}</span>
                <span className="shares"><i className="fa fa-facebook-square"></i>{post.meta.shares}</span>
                <Link to={`/posts/${post._id}`}>
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
            <Link to="/posts/new">
            <button className="btn btn-primary">Add New Post</button>
            </Link>
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