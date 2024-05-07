const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
require("express-async-errors");
const userRouter = require("./routes/user");
const { errorHandler } = require("./middlewares/error");
require("./db/db");
const cors = require("cors");
const { handleNotFound } = require("./utils/helper");

const app = express();
const port = process.env.B_PORT;
app.use(cors());

// MVC - Modal Controller
// connectDB();
app.use(express.json());

//morgan
app.use(morgan("dev"));
app.use("/api/user", userRouter);

app.use("/*", handleNotFound);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listen Port at ${port}`);
});
