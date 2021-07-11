const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);

mongoose
  .connect("mongodb://localhost/google-signup")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => console.error("Couldnot connected to database"));
