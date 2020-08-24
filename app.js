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

app.use(bodyParser.json());

app.use("/api/users", UserRoutes);

app.get("/", (req, res) => {
  res.json({
    msg: "It's working just fine",
  });
});

app.listen(PORT, () => {
  console.log(`App is running on: ${PORT}`);
});

//Temporary
// const Role = require("./models/Role");
// const User = require("./models/User");

// const admin = new Role({ name: "admin", rights: 777 });

// admin
//   .save()
//   .then(() => console.log("Admin saved"))
//   .catch((err) => console.log(err));

// const newUser = new User({
//   email: "cseh.norbert94@gmail.com",
//   username: "NorbertCseh",
//   handle: "norbertcseh",
//   avatar: "URL",
//   password: "123456",
//   register_date: Date.now(),
//   role: admin,
// });

// newUser
//   .save()
//   .then(() => {
//     console.log("User saved");
//   })
//   .catch((err) => console.log(err));
