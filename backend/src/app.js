const express = require('express');
const mongoose =require('mongoose');
const cors = require('cors');
const Routes = require('./routes/authRoutes'); // Ensure this path is correct based on your project structure

 const app=express();


 app.use(cors());
 app.use(express.json());
 const MONGO_URI = 'mongodb://localhost:27017/user-auth';
 mongoose.connect(MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
 .then(()=>console.log("mongodb connected successfuly")).catch((e)=>console.log(e));

app.use('/api',Routes);
 module.exports=app;