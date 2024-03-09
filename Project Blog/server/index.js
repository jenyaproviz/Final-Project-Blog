import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import fileUpload from "express-fileupload";
import authRoute from "./routes/auth.js";
import postRoute from "./routes/posts.js";
import commentRoute from "./routes/comments.js";
import bodyParser from "body-parser";
import initializeDatabase from "../server/utils/init-database.js"; // Updated import
import chalk from "chalk";
import Post from "../server/models/Post.js";

// Configuring environment variables
dotenv.config();

const app = express();

// Constants
const PORT = process.env.PORT || 8080;
const DB_NAME = process.env.DB_NAME;

// Middleware
app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(express.static("uploads"));
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Serve images from the 'uploads' directory
app.use("/uploads", express.static("uploads"));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Middleware for CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Routes
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);

// Fetch all posts and popular posts
app.get("/api/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    const popularPosts = await Post.find({ popularity: { $gte: 10 } }); // Adjust the condition based on your logic

    res.status(200).json({ posts, popularPosts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Connect to MongoDB and start the server
async function start() {
  try {
    await mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(chalk.greenBright("Connected to MongoDB"));

    app.listen(PORT, () =>
      console.log(chalk.blueBright(`Server started on port: ${PORT}`))
    );
  } catch (error) {
    console.error(
      chalk.redBright("Error connecting to MongoDB:", error.message)
    );
    console.error("Error details:", error);
  }
}

start();

// Initialize the database with users
initializeDatabase()
  .then((_result) => {
    console.log(chalk.greenBright("Database initialized successfully"));
  })
  .catch((error) => {
    console.error(chalk.redBright("Error initializing database:", error));
  });
