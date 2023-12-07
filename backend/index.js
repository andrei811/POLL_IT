const express = require("express");
const connectDB = require("./db");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const app = express();
const PORT = 3001;

// Connect to MongoDB
connectDB();

// Parse JSON request body
app.use(express.json());

// Define authentication routes
app.use("/auth", authRoutes);

// Define user routes
app.use("/user", userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.use(
  session({
    secret: "fiwafhiwfwhvuwvu9hvvvwv", // Never ever share this secret in production, keep this in separate file on environmental variable
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000000 },
    store: MongoStore.create({
      mongoUrl: "mongodb://root:example@127.0.0.1:27017",
    }),
  })
);
