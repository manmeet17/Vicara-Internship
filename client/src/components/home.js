import React, { Component } from 'react';
import { connect } from "react-redux";
import {fetchPost} from '../action/fetch_post';
import _ from 'lodash';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AI from './assets/AI.png';
const api="PMQ8-5I2N-T6MN-S1ZI";


class Landing extends Component{
    
    componentDidMount(){
        this.props.fetchPost();
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
                </li>
            )
        });
    }

    render(){
        return (
            <div style={{textAlign: 'center'}}>
            <h1>Blog</h1>
            <div class="container">
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

export default connect(mapStateProps,{fetchPost})(Landing);