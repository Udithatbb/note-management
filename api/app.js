const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
console.log(process.env.PORT);
const port = process.env.PORT || 3000;

//import routes
const noteRoutes=require('./routers/notes');

//app middleware
app.use(bodyParser.json());

//routes middleware
app.use(noteRoutes);

const Db_URL =
  "mongodb+srv://udith:1234@cluster0.bm86ddg.mongodb.net/notesManage?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(Db_URL)
  .then(() => {
    console.log("DB Connected");
    console.log(mongoose.version);
  })
  .catch((err) => console.log("DB Connection error", err));

app.listen(port, () => console.log(`App is running on port ${port}`));
