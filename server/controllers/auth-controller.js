const User = require("../models/user-model")
const bcrypt = require('bcryptjs')

const register = async(req,res) => {
    try {
        console.log(req.body)
        const {username,email,phone,password} = req.body;
        const userExists = await User.findOne({email:email})
        if(userExists){
         return  res.status(409).json({msg:"Email alredy in use"})
        }

      
    

      const userCreted = await User.create({username,email,phone,password})
      res.status(201).json({msg:"Registration successful!", token: await userCreted.generateToken(), userId:userCreted._id.toString()})
    } catch (error) {
        console.log(error)
    }
}


module.exports = {register}