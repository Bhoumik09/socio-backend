const express = require("express");
const app = express();
const authRouter = require("./routes/auth");
const commentRouter = require("./routes/comments");
const dbRouter = require("./routes/db");
const postRouter = require("./routes/posts");
const cors = require("cors");
const PORT = 3000; // Use environment variable or default to 3000
const corsOptions = {
  origin: "*", // Allow requests from this origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
};
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Use the CORS middleware with the configured options
app.use(cors(corsOptions));
app.use(express.json()); // Parse incoming JSON data (important for POST requests)

app.use(authRouter);
app.use(commentRouter);
app.use(dbRouter);
app.use(postRouter);
app.get("/", (req, res) => {
  res.send("this is the new app create by bhoumik");
});
app.listen(PORT, () => {
  console.log("Listening at PORT", PORT);
});
