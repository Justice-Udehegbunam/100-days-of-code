const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("Hello Express!!");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

// Coming back tomorrrow
