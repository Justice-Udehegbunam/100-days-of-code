const express = require("express");
const { ObjectId } = require("mongodb");
require("./db/mongoose.cjs");

const User = require("./models/user.cjs");
const Task = require("./models/task.cjs");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/users", (req, res) => {
  // This "{} fetchess all docs in the db
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((e) => {
      res.status(500).send();
    });
});

app.get("/users/:id", (req, res) => {
  const _id = new ObjectId(req.params);

  User.findById(_id)
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: "User not found!" });
      } else {
        res.send(user);
      }
    })
    .catch((e) => {
      res.status(500).send();
    });
});

app.post("/users", (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => {
      res.status(201).send(user);
      console.log("Success!");
    })
    .catch((e) => {
      res.status(400).send(e);
      console.log(" " + e);
    });
});

//  TASKS

app.get("/tasks", (req, res) => {
  // This "{} fetchess all docs in the db
  Task.find({})
    .then((tasks) => {
      res.send(tasks);
    })
    .catch((e) => {
      res.status(500).send();
    });
});

app.get("/tasks/:id", (req, res) => {
  const _id = new ObjectId(req.params);

  Task.findById(_id)
    .then((task) => {
      if (!task) {
        res.status(404).send({ message: "User not found!" });
      } else {
        res.send(task);
      }
    })
    .catch((e) => {
      res.status(500).send();
    });
});

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);

  task
    .save()
    .then(() => {
      res.status(201).send(task);
    })
    .catch((e) => {
      res.status(400).send(e);

      console.log(" " + e);
    });
});

app.listen(port, () => console.log("Server is listening on port: " + port));
