//!INSTALL NPM and 'npm install morgan --save-dev'
//* ADD 'npm install nodemon --save-dev'
/* "scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js",
  "test": "vitest"
} */

import express from "express";
import { router } from "./api/index.js"

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

// Note: this middleware has to come first! Otherwise, Express will treat
// "random" as the argument to the `id` parameter of /employees/:id.
app.use("/employees", router);

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

export default app;