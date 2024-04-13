// mongodb+srv://katreaniket3:anniejb90@cluster0.40pqktw.mongodb.net/IMDb_Movi?retryWrites=true&w=majority&appName=Cluster0
const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;

mongoose
  .connect(URI)
  .then(() => {
    console.log("Mongoose connected");
  })
  .catch((ex) => {
    console.log("Conn failed", ex);
  });
