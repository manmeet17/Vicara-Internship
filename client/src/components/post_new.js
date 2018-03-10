import React,{Component} from 'react';
import { Field, reduxForm } from "redux-form";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import { createPost } from '../action';
import './assets/new.css';

class PostsNew extends Component{
    renderField(field){
        return(
            <div className="form-group has-danger">
            <label>{field.label}</label>
                <input
                className="form-control"
                type="text"
                //inbuilt property input
                {...field.input}
                />
                <div className="text-help">
            {field.meta.touched ? field.meta.error: ""}
            </div> 
            </div>
        );
    }

    onSubmit(values){
        console.log("Values are:", values);
        this.props.createPost(values,() =>{
            this.props.history.push('/home');
        });
    }

    render(){
        const {handleSubmit}=this.props;
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                label="Title"
                //name connects to the errors objects properties
                name="title"
                component={this.renderField}
                />
                <Field
                label="Categories"
                name="categories"
                component={this.renderField}
                />
                <Field
                label="Content"
                name='content'
                component={this.renderField}
                />
                <Field
                label="Image Link"
                name='imgLink'
                component={this.renderField}
                />
                <Field
                label="Likes"
                name='meta.likes'
                component={this.renderField}
                />
                <Field
                label="Shares"
                name='meta.shares'
                component={this.renderField}
                />
                <button type="submit" className="frombtn1 btn btn-primary pull-xs-left">Submit</button>
                <Link className="formbtn2 btn btn-secondary" to="/home">
                Cancel
                </Link>
            </form>
        );
    }
}

function validate(values){
    // console.log(values);
    const errors={};

    if(!values.title){
        errors.title="Enter a title";
    }
    if(!values.categories){
        errors.categories="Enter some categories";
    }
    if(!values.content){
        errors.content="Enter some content";
    }
    //if errors is empty then its a valid form
    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'PostsNewForm'
})(
   connect(null,{createPost})(PostsNew)
);