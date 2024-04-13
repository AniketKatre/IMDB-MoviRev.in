const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
require("express-async-errors");
const userRouter = require("./routes/user");
const { errorHandler } = require("./middlewares/error");
require("./db/db");
const app = express();
const port = process.env.B_PORT;

// MVC - Modal Controller
// connectDB();
app.use(express.json());

//morgan
app.use(morgan("dev"));

app.use("/api/user", userRouter);

// express async error handling
// app.use((err, req, res, next) => {
//   console.log("err: ", err);
//   res.status(500).json({ error: err.message || err });
// });
app.use(errorHandler);

// app.post(
//   "/sign-in",
//   (req, res, next) => {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.json({ error: "email/password missing" });
//     }
//     next();
//   },
//   (req, res) => {
//     res.send("<h1>Hello I am from your backend about</h1>");
//   }
// );

app.listen(port, () => {
  console.log(`Listen Port at ${port}`);
});
