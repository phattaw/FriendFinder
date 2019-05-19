// 4. Your `apiRoutes.js` file should contain two routes:
var express = require("express");
var router = express.Router();

var friends = require("../data/friends.js");

// * A GET route with the url `/api/friends`. This will be used to display a 
// JSON of all possible friends.
router.get("/api/friends", function(req, res) {
    var allFriends = friends.getAllFriends();
    
    return res.json(allFriends);
});

// * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.
router.post("/api/friends", function(req, res) {
    friendsList = friends.getAllFriends();
    var bestMatch = {
        totalDifference: 50,
        id: 0
    };

    // 6. Determine the user's most compatible friend using the following as a guide:

    //    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
    //    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
    //      * Example:
    //        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
    //        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
    //        * Total Difference: **2 + 1 + 2 =** **_5_**
    for(let i = 0; i < friendsList.length; i++) {
        let totalDifference = 0;
        for(let j = 0; j < req.body.score.length; j++) {
            //    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
            totalDifference += Math.abs(req.body.score[j] - friendsList[i].score[j]);
        }

        //    * The closest match will be the user with the least amount of difference.
        if(bestMatch.totalDifference > totalDifference) {
            bestMatch.totalDifference = totalDifference;
            bestMatch.id = i;
        }
    }

    friends.addFriend(req.body);

    res.json(friendsList[bestMatch.id]);
});

module.exports = router;
