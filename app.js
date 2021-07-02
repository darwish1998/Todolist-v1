
//jsjint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express()


app.get("/", function(req,res){

  var today = new Date();
  var currentDay = today.getDate();
  if (currentDay === 6 || currentDay === 0 ) {
    res.write("<h1>WOW it weekend !!<h1>");
  }else {

    res.sendFile(__dirname + "/index.html");

  }



});

app.listen(3000,function(){

  console.log("Server running at port 3000");

});
