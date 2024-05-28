const express = require("express");
const cors = require("cors");
const User = require("./models/userModel");
const routes = require("./Routes/userRoutes.js");
const { connectToDB } = require("./mongoDB.js");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 5000; // Use environment variable or fallback to 6000 if not set

// Middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable("x-powered-by"); // Corrected spelling

// Routes
app.use("/api", routes);

// Connect to MongoDB database
connectToDB();

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
