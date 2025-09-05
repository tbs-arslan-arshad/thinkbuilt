import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGODB_URL!, { dbName: "thinkbuilt" });

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB Connected Successfully");
    });

    connection.on("error", (err) => {
      console.log("MongoDB Connection Error: " + err);
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong: " + error);
  }
}