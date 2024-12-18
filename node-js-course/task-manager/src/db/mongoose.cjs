const mongoose = require("mongoose");

const dbName = "task-manager";

const connectURL = "mongodb://127.0.0.1:27017/" + dbName;

mongoose.connect(connectURL, { useNewUrlParser: true });

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const Task = mongoose.model("Task", {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const Justice = new User({ name: "Justice", age: "kjsdfkls" });
const myTask = new Task({ description: "Justice note", completed: false });

myTask
  .save()
  .then(() => console.log("I saved successfully!!"))
  .catch((e) => console.log("Error: " + e));
