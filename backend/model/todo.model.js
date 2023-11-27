const db = require('../db')
const mongoose = require('mongoose')
const UserModel = require("./user_model")
const Schema = mongoose.Schema

const todoSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:UserModel.modelName
    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    }
});

const TodoModel = mongoose.model('todo',todoSchema);

module.exports = TodoModel