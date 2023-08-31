const express = require("express");
const router = express.Router();

const data = [];

router.post("/register", (req, res) => {
  // TODO: get the username, email and password from the user and store it in  data array
  // format of the object inside array should be {username:username,email:email,password}
  //TODO: After registration send the message to the user that registraion completed.
});

router.post("/login", (req, res) => {
  //TODO: get email and password from the user, find the email in the data array.
  //TODO: If there is no email matching, then send 404 error message to user sending "credential do not match";
  //TODO: If the email matches, then match the password. If the password do not matches, then again send the 404 error saying credentila do not matches.
  // If password also matches, then send the message to the user saying you are login to the system.
});

module.exports = router;
