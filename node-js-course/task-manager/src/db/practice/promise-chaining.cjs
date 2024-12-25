require("../../../src/db/mongoose.cjs");

const User = require("../../../src/models/user.cjs");
const Task = require("../../../src/models/task.cjs");

/* The behavior you're observing is because User.findByIdAndUpdate() by default returns the document before the update was applied. This is due to the default settings of the findByIdAndUpdate method in Mongoose.

Why this happens:
The method findByIdAndUpdate has an option called returnDocument (or new in older versions of Mongoose). By default, it is set to false, which means the method returns the document as it was before the update.

How to fix it:
To return the updated document instead, you need to set the returnDocument option to "after" (or new: true in older versions of Mongoose).


User.findByIdAndUpdate(
  "6765624d80a7c6dd543cb79c",
  { age: 17 },
  { returnDocument: "after" } // Use "new: true" if you're on an older version of Mongoose
)
  .then((user) => {
    console.log(user); // This will now print the updated document
    return User.countDocuments({ age: 17 });
  }); 
*/

// User.findByIdAndUpdate("6765624d80a7c6dd543cb79c", { age: 17 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 17 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => console.log(e));

// Shorter way to do it with async await

// const updateUserAndCount = async (id, age) => {
//   const user = await User.findByIdAndUpdate(id, { age });
//   const count = await User.countDocuments({ age });
//   return { count: count };
// };

// updateUserAndCount("6765674292a9d9fcef53bae4", 0)
//   .then((count) => console.log(count))
//   .catch((e) => console.log(e));

const deleteAndCountTask = async (id) => {
  await Task.findByIdAndDelete(id);
  const countRemaining = await Task.countDocuments({});

  return countRemaining;
};

deleteAndCountTask("67680a7f94c84e66b348f50e")
  .then((remaining) => {
    console.log("Here are the remaining docs: ", remaining);
  })
  .catch((e) => {
    console.log(e);
  });
