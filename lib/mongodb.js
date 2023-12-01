import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    console.log("Connected to MongoDB");
    await mongoose.connect("mongodb+srv://wiktoriajanaszek:wiki1290@cluster0.kd2txbc.mongodb.net/?retryWrites=true&w=majority");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};
