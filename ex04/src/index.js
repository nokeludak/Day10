// Only change code below this line
var players = {
  7: "Muhamed Besic",
  10: "Miralem Pjanic",
  11: "Edin Dzeko",
};
function myFunction(myObj) {
  var players10 = "10";
  var playerNumber = myObj[players10];
  return playerNumber;
}
console.log(myFunction(players));
// Only change code above this line

module.exports = { players, myFunction };
