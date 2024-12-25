const express = require("express");
const { ObjectId } = require("mongodb");
require("./db/mongoose.cjs");

const User = require("./models/user.cjs");
const Task = require("./models/task.cjs");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});

app.get("/users/:id", async (req, res) => {
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

app.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
    console.log("Success!");
  } catch (e) {
    res.status(400).send(e.message);
  }
});

//  TASKS

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get("/tasks/:id", async (req, res) => {
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

app.post("/tasks", async (req, res) => {
  const task = new Task(req.body);

  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e.message);
    console.log(" " + e.message);
  }
});

app.listen(port, () => console.log("Server is listening on port: " + port));
