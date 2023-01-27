const router = require('express').Router();
const verify = require('./verifyToken');
 const User= require('../models/User.js')

router.get('/user',verify,async(req,res)=>{

    try{
      

// we receive from token the idUser !
//we  req.user.idUser receive form verifyToken , the user is an object what have adUser property
const user= await User.findOne({"idUser":req.user.idUser})

res.status(200).json(user)


    }
    catch (error)
    {

    res.send(`some error occured => ${error}}`)
    }
 
    })
    module.exports=router;