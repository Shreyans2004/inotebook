const express =require('express');
const colors=require('colors');
const app=express();
const dotenv=require('dotenv').config();
const port=process.env.PORT;
const db=require('./db.js')
db();
app.get('/',(req,res)=>{
    res.send("skdvnildsf bbi");
})

app.listen(port,(req,res)=>{
console.log(`app running on port ${port}`.bgBlack.bold.cyan);
})
