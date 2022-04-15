const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const routes = require("./routes/routes");

dotenv.config();
const app = express();

// set security HTTP headers
app.use(helmet());

app.use(morgan("tiny"));

// parse json request body
app.use(express.json());

// enable cors
app.use(cors());
app.options("*", cors());

app.use("/api/v1", routes);

/** error handling for invalid routes */
app.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    error: "Not Found",
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ status: 500, error: "Something went wrong!" });
});

let port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

module.exports = app;
