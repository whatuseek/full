const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      //   required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    //   required: true,
    },

    joinedOn: {
      type: Date,
      default: Date.now,
    },
    forgetPassword:{
        type:Date,
        otp:String,
    }
  },
  {
    collection: "User",
  }
);

module.exports = mongoose.model("User", userSchema);
