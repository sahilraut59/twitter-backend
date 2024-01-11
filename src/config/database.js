const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0/twitter_Dev");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
