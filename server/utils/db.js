const mongoose = require('mongoose')
const URI = process.env.MONGO_URI


const connectDb = async()=>{
    try {
      await mongoose.connect(URI)  
      console.log('connection succefull to database!')
    } catch (error) {
        console.log(`Database connection error`)
        process.exit(0);
    }
}

module.exports = connectDb;
