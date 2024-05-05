const msgRouter = require("express").Router();
const Msg = require("../modals/message");

msgRouter.get("/", (req, res) => {
  Msg.find({}, {}).then((msg) => {
    res.status(200).json(msg);
  });
});

msgRouter.post("/send", (req, res) => {
  const msg = new Msg(req.body);

  msg.save().then(() => {
    res.status(200).json({ message: "message send sucessfully" });
  });
});

module.exports = msgRouter;
