// 5. You should save your application's data inside of `app/data/friends.js` 
// as an array of objects. Each of these objects should roughly follow the format below.

// ```json
// {
//   "name":"Ahmed",
//   "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//   "scores":[
//       5,
//       1,
//       4,
//       4,
//       5,
//       1,
//       2,
//       5,
//       4,
//       1
//     ]
// }
// ```

var friends = [
    {
      name: "Yoda",
      photo: "https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=0%2C0%2C1536%2C864&width=960",
      score: [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
    },
    {
      name: "Darth Maul",
      photo: "https://vignette.wikia.nocookie.net/starwars/images/5/50/Darth_Maul_profile.png/revision/latest?cb=20140209162228",
      score: [
        1,
        2,
        5,
        4,
        1,
        5,
        1,
        4,
        4,
        5,
      ]
    },
    {
      name: "Obi Wan Kenobi",
      photo: "https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png",
      score: [
        1,
        4,
        4,
        5,
        5,       
        1,
        2,
        5,
        4,
        1
      ]
    }
];

function getAllFriends() {
    return friends;
}

function addFriend(newFriend) {
  friends.push(newFriend);
}

module.exports = {
    getAllFriends: getAllFriends,
    addFriend: addFriend
}

