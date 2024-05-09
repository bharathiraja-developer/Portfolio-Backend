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

msgRouter.delete("/delete", async (req, res) => {
  try {
    const { id } = req.body;
    await Msg.findByIdAndDelete(id);
    res.status(200).json({ message: "message deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = msgRouter;
