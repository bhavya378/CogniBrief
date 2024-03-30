// const { strict } = require("assert");
// const mongoose=require("mongoose");
// const connect=mongoose.connect("mongodb://localhost:27017/userInfo");
// connect.then(()=>{
//     console.log("Database connected")
// })
// .catch(()=>{
//     console.log("database can not be connected");
// });
// const LoginSchema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     email:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     }
// });
// const articleSchema = new mongoose.Schema({
//     username:{
//         type: String,
//         required: true
//     },
//     title:{
//         type: String
//     },
//     content: {
//         type: String,
//         required: true
//     },
//     createdAt:{
//         type: Date,
//         default: Date.now
//     },
//     slug:{
//         type: String,
//         required: true,
//         unique: true
    
//     },
//     sanitizedHTML:{
//         type: String,
//         required: true
//     }
// })


// const collection=new mongoose.model("users",LoginSchema);
// module.exports = mongoose.model('Article',articleSchema)
// module.exports=collection;
const { strict } = require("assert");
const mongoose=require("mongoose");
const connect=mongoose.connect("mongodb://localhost:27017/userInfo");
connect.then(()=>{
    console.log("Database connected")
})
.catch(()=>{
    console.log("database can not be connected");
});
const LoginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
const articleSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    title:{
        type: String
    },
    content: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    slug:{
        type: String,
        required: true,
        unique: true
    
    },
    sanitizedHTML:{
        type: String,
        required: true
    }
})


const collection=new mongoose.model("users",LoginSchema);
module.exports = mongoose.model('Article',articleSchema)
module.exports=collection;