const UserService = require("../services/user.services");
const UserModel = require("../model/user_model");

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const successRes = await UserService.registerUser(email, password);

    res.json({ status: true, success: "User Registered successfully" });
  } catch (error) {
    throw error;
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await UserService.checkuser(email);
    const isMatch = await user.comparePassword(password);

    if (!user) {
      res.status(400).json({status:false, message: "User doesn't exist"});
      console.log('a');
      //throw new Error("User don't exist");
    }

    else if (isMatch === false) {
      res.status(400).json({status:false, message: "Password Invalid"});
      console.log('b');
      //throw new Error("Password Invalid");
    }else{

    let tokenData = { _id: user._id, email: user.email };

    const token = await UserService.generateToken(tokenData, "12345", "1h");

    res.status(200).json({ status: true, token: token });}
  } catch (error) {
    res.status(500).json({status:false, message: "Something went wrong"});
    console.log('c');
    //throw error;
  }
};
