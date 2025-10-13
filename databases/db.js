const mongoose = require("mongoose");
require("dotenv").config();

async function handleConnection() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connection successfully.");
  } catch (error) {
    console.error("connection failed.", error.message);
  }
}

module.exports = { handleConnection };
