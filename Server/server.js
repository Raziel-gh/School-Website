const express = require('express')
const Connection = require('./Database/Db.js')
const app = express()

app.use(express.json())
Connection()

app.get('/',(req,res)=>{
    res.send("Server runnning")
})

app.listen(5888,()=>{
    console.log("Server Started")
})