const mongoose = require('mongoose')
const MongoURI = 'mongodb://localhost:27017'

const ConnectToDB = function(){
    mongoose.connect(MongoURI, {useNewURLParser:true})
    .then(()=>{
        console.log("Connected");
    })
    .catch(()=>{
        console.log("Disconnected");
    })
}

module.exports = ConnectToDB