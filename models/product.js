const mongoose = require("mongoose");

const productShcema = new mongoose.Schema({
    name:{
        type : String,
        required : [true , "name must be identified"]
    },
    price:{
        type : Number,
        required : [true , "evry item should have a price"]
    },
    featured:{
        type : Boolean,
        default : false 
    },
    rating:{
        type : Number,
        default : 4.5
    },
    createdAt:{
        type : Date,
        default : Date.now()
    },
    company:{
        type : String,
        enum : {values : ["ikea" , "liddy" , "caressa","marcos"],
        message : "company name not available"}
       ////// enum : ["ikea" , "liddy" , "caressa"]
    }
});


module.exports = mongoose.model("Product" , productShcema);