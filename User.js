const mongoose=require("mongoose");


const userSchema= new mongoose.Schema({
    name: {
        type: String, 
        requried: true
    },
    age : {
        type : Number,
        require : true
    },
    profession:{
        type: String,
    },

    
});
module.exports= mongoose.model("User", userSchema); 