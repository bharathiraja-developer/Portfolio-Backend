const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./utils/config");
const MsgRouter = require("./Controller/MsgRouter");

const app = express();
mongoose.set("strictQuery", false);

console.log("Connecting to MongoDB.....");
mongoose
  .connect(config.URI)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting MongoDB", error);
  });

app.use(cors());
app.use(express.json());
app.use("/api", MsgRouter);

app.listen(config.PORT, () => {
  console.log("Server running sucessfully");
});
