const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');
require('dotenv').config();

try{
    mongoose.connect(`mongodb+srv://${process.env.MONGO_CREDENTIALS}@cluster0.lrcpv.mongodb.net/`);

}catch(e){
    console.log(e);
}
if(mongoose.ConnectionStates.connected){
    console.log('Connected to the database');
}
module.exports=router;

