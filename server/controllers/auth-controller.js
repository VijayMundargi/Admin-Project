const User = require("../models/user-model")
const bcrypt = require('bcryptjs')

const register = async(req,res) => {
    try {
        console.log(req.body)
        const {username,email,phone,password} = req.body;
        const userExists = await User.findOne({email:email})
        console.log(userExists);
        if(userExists){
         return  res.status(409).json({msg:"Email alredy in use"})
        }

      
    

      const userCreted = await User.create({username,email,phone,password})
      res.status(201).json({msg:"Registration successful!", token: await userCreted.generateToken(), userId:userCreted._id.toString()})
    } catch (error) {
        console.log(error)
    }
}


const login = async(req,res) => {
    try {
        const {email,password} = req.body
       const userExists = await User.findOne({email})
       
       if(!userExists){
        res.status(401).json({msg:"Invalid Credentials"})
       }
       const user = await bcrypt.compare(password, userExists.password);

       if(user){
        res.status(200).json({
            msg:"Login successful",
            token: await userExists.generateToken(),
            userId:userExists._id.toString(),
            

        });
       }else{
        res.status(500).json({msg:"Internal Server Error"});
       }

    } catch (error) {
       console.log(error)
    }
}

module.exports = {register,login}