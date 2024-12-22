const { MongoClient, ObjectId } = require("mongodb");

const connectURL = "mongodb://127.0.0.1:27017";
const client = new MongoClient(connectURL);

const dbName = "task-manager";

async function run() {
  try {
    await client.connect();

    const db = client.db(dbName);

    const task = { description: "Play Video Game", completed: false };

    // const addTask = await db.collection("Tasks").insertOne(task);

    const deleteUser = await db
      .collection("Tasks")
      .deleteOne({ completed: null });

    // const deleteDuplicateUser = await db.collection("Users").deleteMany({
    //   name: "Tobi",
    // });s

    console.log(deleteUser.deletedCount);
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    // await client.close(); // Always close the connection when done.
  }
}
run().catch(console.dir);
