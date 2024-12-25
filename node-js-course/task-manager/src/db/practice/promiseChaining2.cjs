require("../../../src/db/mongoose.cjs");

const Task = require("../../../src/models/task.cjs");

Task.findByIdAndDelete("67656b95119d6c26dea017a9")
  .then(() => {
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => console.log(e));
