const mongoose = require("mongoose");

const dbName = "task-manager";

const connectURL = "mongodb://127.0.0.1:27017/" + dbName;

mongoose.connect(connectURL);
