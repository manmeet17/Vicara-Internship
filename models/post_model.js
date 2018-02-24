import { model } from 'mongoose';

var mongoose=require('mongoose');

var postSchema=new mongoose.Schema({
    title: String,
    content : String,
    categories: [String],
    author : String,
    created: { type: Date, default: Date.now },
    meta: {
        likes: Number,
        shares: Number
    }
});

var Post=mongoose.model('Post',postSchema);

module.exports=Post;