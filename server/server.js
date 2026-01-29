require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./router/auth-router')
const connectDb = require('./utils/db.js')
app.use(express.json())
app.use("/api/v1/auth", router)

const PORT = process.env.PORT
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on port: ${PORT}`)
    })
})