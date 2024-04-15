const mongoose = require("mongoose");
console.log(process.env.MONGODB_CONNECT_URI);
mongoose.connect(process.env.MONGODB_CONNECT_URI);
const connection = mongoose.connection;
connection.on("error", () => {
  console.log("Error Connecting to Database");
  process.exit(1);
});
connection.on("connected", () => {
  console.log("Connecting to Database Successful");
});

module.exports = connection;
