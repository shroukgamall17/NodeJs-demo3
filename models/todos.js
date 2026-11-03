const mongoose=require("mongoose")

// const { Schema } = mongoose;

const  todoSchema =mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:30,
        minLength:3,
        unique:true
        // default:"default todo"
    },
    time:{
        type:Date,
        default: new Date.now
    }
})

const todoModel=mongoose.model('Todo', todoSchema)

module.exports=todoModel