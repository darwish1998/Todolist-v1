const express = require("express");
const bodyParser = require("body-parser");

const app = express()
app.set('view engine', 'ejs');



app.get("/", function(req, res) {

  var today = new Date();
  var currentDay = today.getDate();
  var day = "";
  //
  // if (currentDay === 6 || currentDay === 0 ) {
  //   day = "Weekend";
  //
  //
  // }else {
  //   day = "Weekday!";
  // }
  switch (currentDay) {

    case 1:
      day = "Sato";
      break;

    case 2:
      day = "Sun";
      break;

    case 3:
      day = "Mon";
      break;

    case 4:
      day = "Tue";
      break;

    case 5:
      day = "Wed";
      break;

    case 6:
      day = "Thus";
      break;

    case 7:
      day = "Fri";
      break;

    default:
    console.log("Something is Wrong: current day is" + currentDay );

  }

  res.render("list", {
    kindOfDay: day
  });


});

app.listen(3000, function() {

  console.log("Server running at port 3000");

});
