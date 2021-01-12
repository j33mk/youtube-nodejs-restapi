var express = require('express');
var router = express.Router();
var User = require('../models/user.model.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  try {
    User.find().then(users=>{
      res.send({
        users:users,flag:true,totalUsers:Object.keys(users).length
      })
    }).catch(err=>{
      console.log(err);
      res.status(500).send({flag:false,message:"Sorry something went wrong"});
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({message:"An error occured",error:error});
  }
 
});
router.get('/:id', function(req, res, next) {
  try {
    var id = req.params.id;
    User.findById(id).then(user=>{
      res.status(200).send({
        user:user,flag:true
      });
    }).catch(err=>{
      console.log(err);
      res.status(500).send({
        flag:false,message:"Sorry something went wrong try again"
      })
    });
    
  } catch (error) {
    console.log(error);
    res.status(500).send({message:"An error occured",error:error});
  }
 
});

router.post('/', function(req, res, next) {
  try {
    var mybody = req.body;
    const user = new User(mybody);
    console.log(user);
    user.save().then(()=>{
      res.status(200).send({
        flag:true,
        message:"New user is created"
      });
    }).catch((err)=>{
      res.status(500).send({
        flag:false,
        message:"Sorry something went wrong"
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({message:"An error occured",error:error});
  }
 
});

router.put('/:id', function(req, res, next) {
  try {
    var id = req.params.id;
    var mybody = req.body;
    User.findByIdAndUpdate(id,{$set:mybody},{new:true}).then(user=>{
      res.status(200).send({
        flag:true,message:"The user is updated succesfully"
      });
    }).catch((err)=>{
      console.log(err);
      res.status(200).send({
        flag:false,message:"something went wrong try again"
      });
    })
    
  } catch (error) {
    res.status(500).send({message:"An error occured",error:error});
  }
 
});
router.delete('/:id', function(req, res, next) {
  try {
    var id = req.params.id;
    User.findByIdAndRemove(id).then(user=>{
      res.status(200).send({
        flag:true,message:"User is deleted"
      });
    }).catch(err=>{
      console.log(err);
      res.status(200).send({
        flag:false,message:"User is not deleted"
      });
    });
  } catch (error) {
    res.status(500).send({message:"An error occured",error:error});
  }
 
});
module.exports = router;
