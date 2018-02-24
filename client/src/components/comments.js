import React, {Component} from 'react';
import {connect} from 'react-redux';

class Comment extends Component{

    renderComments(){
        
    }

    render(){
        <div className="comments">
        <ul className="comment-list">
        {this.props.renderComments()}
        </ul>
        </div>
    }
}

function mapStateToProps(state){
    return {post: state.posts}
}


export default connect(mapStateToProps,null)(Comment);