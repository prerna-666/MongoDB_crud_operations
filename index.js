const express=require('express');
const mongoose=require('mongoose');
const User=require("./User");

mongoose.connect("mongodb://localhost:27017/b2b");
const app=express();

/*run();
async function run(){
    
    const users = [
        { name: "sam", age: 21, profession: "software developer" },
        { name: "john", age: 25, profession: "engineer" },
        { name: "emma", age: 30, profession: "designer" }
      ];

      await User.create(users);

        console.log("Users inserted successfully");

}*/





app.listen(5000,()=>{
    console.log("i am listening.");
});

app.get('/',async(req,res)=>{
     
    const users = [
        { name: "sam", age: 21, profession: "software developer" },
        { name: "john", age: 25, profession: "engineer" },
        { name: "emma", age: 30, profession: "designer" }
      ];

      await User.create(users);
      res.send("data entered successfully");
});

app.post('/find',async(req,res)=>{
    const user= await User.find({name:"john"});
    res.json(user);
});

app.put('/updating',async(req,res)=>{
    const user= await User.findOneAndUpdate({name:"emma"},{name:"emily",age:21,profession:"dancer"}, {new:true});
    res.json(user);

})

app.delete('/deleting',async(req,res)=>{
    const user= await User.findOneAndDelete({name:"sam"});
    
    res.send("deleted successfully");
})

