// 4. Your `apiRoutes.js` file should contain two routes:
var express = require("express");
var router = express.Router();

var friends = require("../data/friends.js");

console.log("Friends:");
console.log(friends);

// * A GET route with the url `/api/friends`. This will be used to display a 
// JSON of all possible friends.
router.get("/api/friends", function(req, res) {
    console.log('GET /api/friends ')
    var allFriends = friends.getAllFriends();
    
    return res.json(allFriends);
});

// * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.
router.post("/api/friends", function(req, res) {
    console.log('POST /api/friends ')
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newcharacter = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

    console.log(newcharacter);

    characters.push(newcharacter);

    res.json(newcharacter);
});

module.exports = router;
