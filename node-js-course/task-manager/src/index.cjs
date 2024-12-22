const express = require("express");
require("./db/mongoose.cjs");

const User = require("./models/user.cjs");
const Task = require("./models/task.cjs");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => {
      res.send(user);
      console.log("Success!");
    })
    .catch((e) => {
      res.status(400).send(e);
      console.log(" " + e);
    });
});

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);

  task
    .save()
    .then(() => {
      res.send(task);
    })
    .catch((e) => {
      res.status(400).send(e);

      console.log(" " + e);
    });
});

app.listen(port, () => console.log("Server is listening on port: " + port));
