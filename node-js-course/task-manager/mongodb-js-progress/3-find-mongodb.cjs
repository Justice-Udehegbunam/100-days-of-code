const { MongoClient, ObjectId } = require("mongodb");

const connectURL = "mongodb://127.0.0.1:27017";
const client = new MongoClient(connectURL);

const dbName = "task-manager";

async function run() {
  try {
    await client.connect();

    const db = client.db(dbName);
    // const findUser = await db
    //   .collection("Users")
    //   .findOne({ _id: new ObjectId("6750a8b22e32eebf7f561445") });
    // // Find one only returns a single document no matter if it matches more than one document

    // // if we want to search for a specific document by id we have to provide the ObjectID because ids in mongodb.js are stored in binary

    // if (!findUser) {
    //   console.log("User not found!");
    // } else {
    //   console.log("Found user:", findUser);
    // }

    //  Find: Doesnt return a document specifically it returns a cursor (pointer to that document)

    const cursor = await db.collection("Users").find({ name: "pascal" });

    const findUsers = cursor.toArray();
    const countFoundUsers = (await findUsers).length;
    if (findUsers.length === 0) {
      ``;
      console.log("No users found!");
    } else {
      console.log("Found users:", findUsers); // Logs the array of users
    }

    const challengeCursor = await db
      .collection("Tasks")
      .aggregate([{ $match: { completed: true } }, { $count: "totalUsers" }])
      .toArray();
    //  this match function is used to count when the data is long
    if (challengeCursor.length > 0) {
      console.log("Found " + challengeCursor[0].totalUsers + " users");
    } else {
      console.log("No completed tasks found.");
    }

    // For additional count (if you have it defined elsewhere)
    // console.log("No of users is " + countFoundUsers);

    console.log("Connected to the MongoDB server.");
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    // await client.close(); // Always close the connection when done.
  }
}
run().catch(console.dir);
