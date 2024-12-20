const mongoose = require("mongoose");
const validator = require("validator");

const dbName = "task-manager";

const connectURL = "mongodb://127.0.0.1:27017/" + dbName;

mongoose.connect(connectURL);

//Adding validation
const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid!");
      }
    },
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Age can't be less than 0");
      }
    },
  },
});

// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//   },
//   completed: {
//     type: Boolean,
//   },
// });

const Justice = new User({
  name: "Patricia   ",
  email: "mike@Gmail.com",
  age: 117,
});
// const myTask = new Task({ description: "Justice note", completed: false });

Justice.save()
  .then(() => console.log(Justice))
  .catch((e) => console.log("Error: " + e));
