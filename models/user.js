//const Joi = require("joi");
//const jwt = require('jsonwebtoken');  
const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);

const userSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
      },
      email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024,
      },
      resetLink:{
        data : String,
        default: ''
      },
      
    }, {timestamps:true}
  );

const User = mongoose.model("User", userSchema);

exports.User = User;
  