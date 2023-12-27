const mongoose = require("mongoose");
require("dotenv").config();

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.Mongo_Url);
    console.log("Connected to the database");
  } catch (error) {
    console.log("Error connecting to the database:", error.message);
  }
};

module.exports = connectToDb;
