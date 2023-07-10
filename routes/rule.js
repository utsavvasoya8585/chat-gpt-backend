const express = require("express");
const Rule = require("../models/Rule");
const router = express.Router();

// Add Rule Data
router.post("/addrule", async (req, res) => {
  const { uid, email, label, rules} = req.body;
  console.log({ uid, email, label, rules })
  try {
    const RuleDoc = await Rule.create({ uid, email, label, rules });
    res.json(RuleDoc);
  } catch (e) {
    res.status(422).json(e);
  }
  console.log("in")
});

// UPDATE
router.put(`/update/:id`, async (req, res) => {
  const id = req.params.id;
  const RuleUpdate = req.body;
  const RuleDoc = await Rule.findById(id);
  // console.log(designDoc.noOfFloor);
  RuleDoc.set(RuleUpdate);
  // console.log(designDoc.noOfFloor);
  try {
    await RuleDoc.save();
    res.sendStatus(204);
  } catch (e) {
    res.sendStatus(404);
  }
  // console.log(designDoc);
});

// Get already added rules using: ID
router.get("/getrule/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const RuleDoc = await Rule.find({ _id: id });
    res.json(RuleDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

// Delete
router.delete(`/delete/:id`, async (req, res) => {
  const id = req.params.id;
  try {
    // console.log(id);
    await Rule.deleteOne({ _id: id });
    res.sendStatus(204);
  } catch (e) {
    res.sendStatus(404);
  }
});

// get all Rules
router.get("/getrules/:uid", async (req, res) => {
  const {uid} = req.params;
  // console.log(uuid)
  try {
    const RuleDoc = await Rule.find({uid: uid});
    res.json(RuleDoc);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

// UPDATE
router.put(`/update/:id`, async (req, res) => {
  const id = req.params.id;
  const ruleUpdate = req.body;
  const ruleDoc = await Rule.findById(id);
  // console.log(designDoc.noOfFloor);
  ruleDoc.set(ruleUpdate);
  // console.log(designDoc.noOfFloor);
  try {
    await ruleDoc.save();
    res.sendStatus(204);
  } catch (e) {
    res.sendStatus(404);
  }
  // console.log(designDoc);
});

// Delete
router.delete(`/delete/:id`, async (req, res) => {
  const id = req.params.id;
  try {
    // console.log(id);
    await Rule.deleteOne({ _id: id });
    res.sendStatus(204);
  } catch (e) {
    res.sendStatus(404);
  }
});

module.exports = router;
