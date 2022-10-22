const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;
console.log(process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI, {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
    dbName: process.env.DBMONGO,
  })
  .then(() => console.log("connected to MongoDB"))
  .catch(() => console.error("Connection error: "));

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const home = require("./routes/user");
app.use("/", home);

const notebook = require("./routes/assets/notebooks");
app.use("/assets", notebook);

app.get("/healthz", (req, res) => res.status(200).send("success"));

app.listen(port, () => {
  console.log(`${port}`);
});
