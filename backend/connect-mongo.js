const mongoose = require("mongoose");

const DB_NAME = "ADMIN_PRODUCT";
const connectionString = `mongodb://localhost:27017/${DB_NAME}`;

mongoose.connect(
  connectionString,
  {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("Can not connect to mongodb!");
    } else {
      console.log("Connected to MongoDB!");
    }
  }
);
