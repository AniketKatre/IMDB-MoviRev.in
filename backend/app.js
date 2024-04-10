const express = require("express");
const userRouter = require("./routes/user");

const app = express();
const port = 8000;

// MVC - Modal Controller

app.use(userRouter);

app.get("/about", (req, res) => {
  res.send("<h1>Hello I am from your backend about</h1>");
});

app.listen(port, () => {
  console.log(`Listen Port at ${port}`);
});
