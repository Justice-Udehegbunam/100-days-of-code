const { MongoClient } = require("mongodb");

const connectURL = "mongodb://127.0.0.1:27017";

const client = new MongoClient(connectURL);

const dbName = "task-manager";

async function run() {
  try {
    await client.connect();

    console.log("Connected to the MongoDB server.");

    const db = client.db(dbName);
    db.collection("Users").insertOne({ name: "Justice", age: "18" });
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    // Ensure the client is closed
    // await client.close();
    // console.log("Connection to MongoDB server closed.");
  }
}

// Run the function
run().catch(console.dir);
