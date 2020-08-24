const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const UserRoutes = require("./routes/UserRoutes");
const keys = require("./keys");
const PORT = 5000;

mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json);

app.use("/api/users", UserRoutes);

app.get("/", (req, res) => {
  res.json({
    msg: "It's working just fine",
  });
});

app.listen(PORT, () => {
  console.log(`App is running on: ${PORT}`);
});
