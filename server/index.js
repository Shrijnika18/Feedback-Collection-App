const express = require("express"); //gets access to express library, like import
const app = express();

//create route handler
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//localhost:5000
