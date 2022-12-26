const mongoose = require('mongoose');
const mongurl='Mongo db url'
const mongodb = async()=>{
    await mongoose.connect(mongurl,{useNewUrlParser:true},async(err,result)=>{
        if(err){console.log("---",err)}
        else{
    console.log('Jai Maa kali');

    const fetched =await mongoose.connection.db.collection("post")
    fetched.find({}).toArray(function(err,data){
        if(err) console.log(err)
        else{
      console.log("*")
        }
    }
        )
}
});
}

module.exports =  mongodb;
