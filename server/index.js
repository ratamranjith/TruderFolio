const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: ["https://truder-folio-server.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.use(express.static("build"));

require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const port = 5000;
// Your route and middleware definitions go here

const portfolioRoute = require("./routes/portfolioRoutes");

app.use("/api/portfolio", portfolioRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
