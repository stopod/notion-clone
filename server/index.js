const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;
require("dotenv").config();

app.use(express.json());
app.use("/api/v1", require("./src/v1/routes/auth"));

// 20230219 section 5

try {
  mongoose.set("strictQuery", true);
  mongoose.connect(process.env.MONGODB_URL);
  console.log("DBと接続中");
} catch (error) {
  console.log(error);
}

app.listen(PORT, () => {
  console.log("server starting...");
});
