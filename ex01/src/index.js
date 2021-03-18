// Onl<ychange code below this line
var myPet = {
  name: "Doni",
  legs: 4,
  species: "Dog",
  friends: ["Mia", "Dona"],
};
function myFunction(myObj) {
  return myObj;
}
// Only change code above this line
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };
