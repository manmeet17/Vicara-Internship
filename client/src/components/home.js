import React, { Component } from 'react';
import { connect } from "react-redux";
import {fetchPost} from '../action/fetch_post';
import _ from 'lodash';
const api="PMQ8-5I2N-T6MN-S1ZI";


class Landing extends Component{
    
    componentDidMount(){
        this.props.fetchPost()
    }

    renderPost(){
        return _.map(this.props.posts,post => {
            return (
                <li className="list-group-items" key={post.id}>
                {post.title} <br/>
                {post.content}
                </li>
            )
        });
    }

    render(){
        return (
            <div style={{textAlign: 'center'}}>
            <h1>Blog</h1>
            {this.renderPost()}
            </div>
        );
};
}

function mapStateProps(state){
    return {posts: state.posts};
}

export default connect(mapStateProps,{fetchPost})(Landing);