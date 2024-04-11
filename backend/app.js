const express = require("express");
const userRouter = require("./routes/user");
require("./db/db");
const app = express();
const port = 8000;

// MVC - Modal Controller
// connectDB();

app.use(express.json());

app.use("/api/user", userRouter);

app.post(
  "/sign-in",
  (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ error: "email/password missing" });
    }
    next();
  },
  (req, res) => {
    res.send("<h1>Hello I am from your backend about</h1>");
  }
);

app.get(
  "/about",
  (req, res, next) => {},
  (req, res) => {
    res.send("<h3>About pages.</h3>");
  }
);

app.listen(port, () => {
  console.log(`Listen Port at ${port}`);
});
