const Thought = require('../../models/Thought');
const User = require('../model/User');

const router = require('express').Router();

// /api/users
router.get('/users', async function(req, res){
  const user = await User.find({});

  res.json(users);

});

router.get('/users/:id', async function(req, res){
  const user = await User.findOne({
    _id: req.params.id
  });

  res.json(users);

});

router.post('/users', async function(req, res){
  try{
      const user = await User.create({
        username: req.body.username,
        email: req.body.email,

      })
    }catch(err){
      return res.status(422).json({
        err: err,
    })
  };

  res.json(users);

}):

// /api/
router.put('/users/:id', async function (req, res){

  const updated = await User.findByIdAndUpdate(req.params.id,
    req.body, {new: true, runValidator: true});
    
  res.json(updated)
})
 
router.delete('/users/:id', async function(req, res) {

  const deleted = User.findByIdAndDelete(req.params.id);

  res.json({
    data: 'success',
  })

});

// const thought = create thought

// User.findByIDAndUpdate(req.body.userId, {
  //$push: {
    // thoughts: thought._id
//}
//})
router.post('/users/:userID/friends/;friendId', async function (req,res) {

// find and update user 
const updated = await User.findByIdAndUpdate(req.params.id,{

  $push: {
    friend:req.params.friendId,
  }
}, {new: true});

res.json(updated);
})
router.delete('/users/:userID/friends/;friendId', async function (req,res){
  const updated = await User.findByIdAndUpdate(req.params.id, {
    $pull: {
      friend:req.params.friendId,
    }
  }, {new: true});
  res.json(updated);
})

// /api/thought
router.get('/thoughts', async function(req, res){
  const thought = await Thought.find({});

  res.json(thought);

});
router.get('/thoughts/:id', async function(req, res){
  const thought = await Thought.findOne({
    _id: req.params.id
  });

  res.json(thought);

});

router.post('/thoughts', async function(req, res){
  try{
      const thought = await Thought.create({
        thoughtText: req.body.thoughtText,
        username: req.body.email,
        userId:req.body.userId
      })
    }catch(err){
      return res.status(422).json({
        err: err,
    })
  };

  res.json(users);

}):

router.put('/thoughts/:id', async function (req, res){

  const updated = await Thought.findByIdAndUpdate(req.params.id,
    req.body, {new: true, runValidator: true});
    
  res.json(updated)
})

router.delete('/thoughts/:id', async function(req, res) {

  const deleted = User.findByIdAndDelete(req.params.id);

  res.json({
    data: 'success',
  })

});



module.exports = router;
