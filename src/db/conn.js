const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://aanchalnavlakha:aanchal1234@cluster0.gfhzkdr.mongodb.net/userData?retryWrites=true&w=majority"
  )
  .then(() => console.log("success"))
  .catch((err) => console.log(err));
