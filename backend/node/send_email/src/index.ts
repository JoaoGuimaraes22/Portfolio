// Imports
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// Helpers

// Routes Imports

// Midleware
const app = express();
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// In Dev
app.use(cors());
//In Production
// app.use(cors(corsConfig));

// Routes
// app.use("/api/v1/login", loginRoute);

// Server Port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
