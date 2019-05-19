// In this activity, you'll build a compatibility-based "FriendFinder" application -- 
// basically a dating app. This full-stack site will take in results from your users' 
// surveys, then compare their answers with those from other users. The app will then 
// display the name and picture of the user with the best overall match.
// You will use Express to handle routing. Make sure you deploy your app to Heroku so 
// other users can fill it out.
// 2. Your `server.js` file should require the basic npm packages we've used in class: 
// `express` and `path`.

// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

var app = express();

// Sets up the Express App
// =============================================================
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

app.use(htmlRoutes);
app.use(apiRoutes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


  
