var express = require('express');
var router = express.Router();
const Post = require('../models/post');



router.get('/', function(req, res, next) {
  res.json([{
  	id: 1,
    title: "AI",
    content: "AI is the future"
  }, {
  	id: 2,
    title: "ML",
    content: "ML is interesting"
  }]);
});

// router.get('/:id',function(req,res){
  

// });

router.post('/',function(req,res){
  const newPost=new Post({
    title: req.body.title,
    content: req.body.content,
    categories: req.body.categories.split(',')
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
