// Find/FindIndex Function Exercise

// findUserByUsername() FUNCTION
const users = [
  { username: "mlewis" },
  { username: "akagen" },
  { username: "msmith" },
];

function findUserByUsername(arr, username) {
  return arr.find(function (name) {
    if (name.username === username) {
      return name.username;
    } else {
      return undefined;
    }
  });
}

console.log(findUserByUsername(users, "mlewis")); // {username: 'mlewis'}
console.log(findUserByUsername(users, "taco")); // undefined
console.log(findUserByUsername(users, "")); // undefined

// remove User() FUNCTION

function removeUser(arr, username) {
  let foundIdx = arr.findIndex(function (name) {
    return name.username === username;
  });
  if (foundIdx === -1) return;

  return arr.splice(foundIdx, 1)[0];
}

console.log(removeUser(users, "akagen")); // {username: 'akagen'}
console.log(removeUser(users, "akagen")); // undefined
console.log(removeUser(users, "mlewis"));
console.log(removeUser(users, "mlewis"));
