const mongoose = require("mongoose");
const connection = require("../db");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function () {
  try {
    var user = this;
    const salt = await bcrypt.genSalt(10);
    const hashpass = await bcrypt.hash(user.password, salt);

    user.password = hashpass;
  } catch (error) {
    throw error;
  }
});

userSchema.methods.comparePassword = async function(userPassword){
  try{
    //console.log(this.password);
    const isMatch = await bcrypt.compare(userPassword,this.password);
    return isMatch;
  }catch(error){
    throw error;
  }
}

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
