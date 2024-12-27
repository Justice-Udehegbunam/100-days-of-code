const express = require("express");
require("./db/mongoose.cjs");
const userRouter = require("./routes/user.cjs");
const taskRouter = require("./routes/task.cjs");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => console.log("Server is listening on port: " + port));
