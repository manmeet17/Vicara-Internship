var express = require('express');
var router = express.Router();
const Post = require('../models/post');



router.get('/', function(req, res, next) {
  Post.find({}).exec((err, posts) =>{
    if(err)
    {
      res.status(200).json({
        status:400,
        message: "Error in finding posts",
        info: err
      });
    }
    res.json({
      status: 200,
      message: "Successfully found posts",
      info: posts
    });
  });
});

router.get('/:id',function(req,res){
  const id=req.params.id;
  Post.findById(id, function(err,post){
    if(err) throw(err);

    res.json({
      status: 200,
      message: "Single post found",
      info: post
    });
  });
});

router.post('/new',function(req,res){
  const newPost=new Post({
    title: req.body.title,
    content: req.body.content,
    categories: req.body.categories.split(','),
    imgLink: req.body.imgLink,
    meta: {
      likes: req.body.meta.likes,
      shares: req.body.meta.shares
    }
  });

  newPost.save((err) => {
    if(err) return res.json({
      status: 400,
      message: "Failed to insert data",
      info: err
    });

    res.json({
      status:200,
      message: "Successfully inserted data",
      info: newPost
    });
  });
});


module.exports = router;
