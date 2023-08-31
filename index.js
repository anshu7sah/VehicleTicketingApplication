const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome");
});

//TODO: import the router from the user folder and use it with app as app.use(...);

//TODO: After completing all these things check the route from postman.

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
