const express = require("express");

const mongoose = require("mongoose");
const Router = require("./routes");

const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(Router);

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/pages.js"));

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
