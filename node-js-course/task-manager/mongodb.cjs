const { MongoClient, ObjectId } = require("mongodb");

const connectURL = "mongodb://127.0.0.1:27017";

const client = new MongoClient(connectURL);

const dbName = "task-manager";

const id = new ObjectId();
console.log(id);

console.log(id.getTimestamp());

async function run() {
  try {
    await client.connect();

    console.log("Connected to the MongoDB server.");

    const db = client.db(dbName);

    // const taskCollection = await db.collection("Tasks");

    // const tasks = [
    //   { description: "Wash Plate", completed: true },
    //   { description: "Fetch Water", completed: false },
    //   { description: "Call mum", completed: true },
    // ];

    // taskCollection.insertMany(tasks, (error, result) => {
    //   if (error) {
    //     return console.log("Unable to insert tasks!");
    //   }
    // });
    // //   console.log("Inserted ID:", result.insertedId);
    // console.log("Insert successful!");

    const result = await db.collection("Users").insertOne(
      // the _id is only if you feel like it
      { _id: id, name: "Tobi", age: 22 },

      (error, result) => {
        if (error) {
          return console.log("Unable to insert docs!");
        }
      }
    );
    console.log("Inserted ID:", result.insertedId); // returns the id of the inserted data
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    // Ensure the client is closed
    // await client.close();
    // console.log("Connection to MongoDB server closed.");
  }
}

run().catch(console.dir);
