const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");

const app = express();

app.use(express.json())
app.use(Cors());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err)=>console.log(err));

  app.listen(5000,()=>{
    console.log('App is listerning to 5000')
  })