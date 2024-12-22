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

  password: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,

    validate(value) {
      if (!validator.isLength(value, { min: 7, max: undefined })) {
        throw new Error("Password must be greater than 6 characters!");
      } else if (value.includes("password")) {
        throw new Error("Password cannot include the string 'Passowrd'");
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

const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// const Justice = new User({

//   name: "Tortia   ",
//   email: "hbg@Gmail.com",
//   password: "Fpassrdsartss",
//   age: 17,
// });
// const myTask = new Task({ description: "Justice note", completed: false });

const todaysTask = new Task({ description: " " });

todaysTask
  .save()
  .then(() => console.log(todaysTask))
  .catch((e) => console.log(" " + e));

// Justice.save()
//   .then(() => console.log(Justice))
//   .catch((e) => console.log(" " + e));
