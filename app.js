const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");



app.get("/", function(req, res) {

  var today = new Date();
  var currentDay = today.getDate();
  var day = "";

  // if (currentDay === 6 || currentDay === 0 ) {
  //   day = "Weekend";
  //
  //
  // }else {
  //   day = "Weekday!";
  // }
  switch (currentDay) {

    case 0:
      day = "Sunday";
      break;

    case 1:
      day = "Mondat";
      break;

    case 2:
      day = "Tuesday";
      break;

    case 3:
      day = "Wednessday";
      break;

    case 4:
      day = "Thursday";
      break;

    case 5:
      day = "Friday";
      break;

    case 6:
      day = "Saturday";
      break;

    default:
    console.log("Something is Wrong: current day is " + currentDay);

  }

  res.render("list", {
    kindOfDay: day
  });


});

app.listen(3000, function() {

  console.log("Server running at port 3000");

});
