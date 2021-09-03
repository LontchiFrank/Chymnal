const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const TodoDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Succesfully connection to the database");
  } catch (err) {
    console.log(err.message);
    console.log("error");
  }
};

module.exports = TodoDB;
