const express = require("express");
const router = express.Router();
const User = require("../models/user.cjs");
const { ObjectId } = require("mongodb");

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/users/:id", async (req, res) => {
  const _id = new ObjectId(req.params);
  try {
    const user = await User.findById(_id);
    if (!user) {
      res.status(404).send({ message: "User not found!" });
    } else {
      res.send(user);
    }
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
    console.log("Success!");
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update);
  });

  if (!isValidOperation) {
    res.status(400).send({ error: "Invalid Update!" });
  }
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    // no user with the id
    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(400).send(e.message);
    console.log(e.message);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).send({ message: "No User Found!" });
    }

    res.send("User deleted successfully!");
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
