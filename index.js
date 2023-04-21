const express = require("express");
const cors = require("cors");
require("./dbconn");
const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const todoRoutes = require("./routes/todoRoutes");

app.use("/api/todos", todoRoutes);

app.listen(5002, () => {
  console.log("https://assignment-backend-jbtk.onrender.com");
});
