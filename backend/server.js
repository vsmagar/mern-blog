const express = require("express");
require("dotenv").config({ path: "./config/.env" });
const userRoute = require("./routes/userRoute");
const blogRoute = require("./routes/blogRoute");
const app = express();
const cors = require("cors");
const { db } = require("./config/db");
db();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/api/user", userRoute);
app.use("/api/blog", blogRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) {
    console.log("error" + err);
  } else {
    console.log(`SERVER IS RUNNIG ON http://localhost: ${PORT}`);
  }
});
