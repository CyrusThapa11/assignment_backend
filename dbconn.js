const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://user2:user2@cluster0.xiftkab.mongodb.net/FirstDB?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
//   },
// });
// async function run() {
//   try {
//     mongoose.set("strictQuery", false);
//     mongoose.connect(uri);
//     console.log("Mongo connected");
//   } catch (error) {
//     console.log(error);
//     process.exit();
//   }
// }
const mongoose = require("mongoose");
async function run() {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(uri);
    console.log("Mongo connected");
  } catch (error) {
    console.log(error);
    process.exit();
  }
}
run().catch(console.dir);
