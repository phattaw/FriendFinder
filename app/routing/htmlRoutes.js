// 3. Your `htmlRoutes.js` file should include two routes:
var express = require("express");
var router = express.Router();
var path = require("path");

//    * A default, catch-all route that leads to `home.html` which displays the home page.
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
//    * A GET Route to `/survey` which should display the survey page.
router.get("/survey", function(req, res) {
res.sendFile(path.join(__dirname, "../public/survery.html"));
});

module.exports = router;
