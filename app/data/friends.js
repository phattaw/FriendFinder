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
      photo: "",
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
      photo: "",
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
      name: "Obi Wan Kenobi",
      photo: "",
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

