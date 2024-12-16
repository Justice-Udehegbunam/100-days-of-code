const { MongoClient, ObjectId } = require("mongodb");

const connectURL = "mongodb://127.0.0.1:27017";
const client = new MongoClient(connectURL);

const dbName = "task-manager";

async function run() {
  try {
    await client.connect();

    const db = client.db(dbName);

    // const updatePromise = await db.collection("Users").updateOne(
    //   {
    //     _id: new ObjectId("6750a899761d4e7804a50e29"),
    //   },
    //   {
    //     $set: {
    //       name: "Pluto",
    //     },
    //     $inc: {
    //       age: -29,
    //     },
    //   }
    // );

    // using Update many promise

    const updateManyPromise = await db.collection("Tasks").updateMany(
      {
        completed: false,
      },
      {
        $set: {
          completed: true,
        },
      }
    );

    console.log(updateManyPromise.matchedCount);
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    // await client.close(); // Always close the connection when done.
  }
}
run().catch(console.dir);
