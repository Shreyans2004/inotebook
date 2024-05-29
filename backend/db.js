const mongoose=require('mongoose');
const connect=async()=>{
try{
    const conn= await mongoose.connect(process.env.MONGO_URI)
    if(conn){
        console.log('connected successfully'.rainbow.underline.bold);
    }

}catch(error){
console.log('mongodb not connected');
}
}
module.exports=connect;

