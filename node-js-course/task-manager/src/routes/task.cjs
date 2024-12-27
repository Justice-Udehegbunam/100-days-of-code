const express = require("express");
const router = express.Router();
const Task = require("../models/task.cjs");
const { ObjectId } = require("mongodb");

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/tasks/:id", async (req, res) => {
  const _id = new ObjectId(req.params);
  console.log(_id);

  try {
    const task = await Task.findById(_id);
    if (!task) {
      return res.status(404).send({ message: "User not found!" });
    }
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/tasks", async (req, res) => {
  const task = new Task(req.body);

  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e.message);
    console.log(" " + e.message);
  }
});

router.patch("/tasks/:id", async (req, res) => {
  const tasks = Object.keys(req.body);
  const allowedUpdates = ["description", "completed"];
  const isValidOperation = tasks.every((task) => {
    return allowedUpdates.includes(task);
  });
  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid Update!" });
  }
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).send();
    }

    res.send(task);
  } catch (e) {
    res.status(400).send(e.message);
    console.log(e.message);
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).send({ message: "No tasks Found!" });
    }

    res.send("task deleted successfully!");
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
