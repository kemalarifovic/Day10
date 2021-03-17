// Create lion object here
var lion = {
  name: "Simba",
  legs: 4,
  tail: 1,
};
// End of lion object

function myFunction(propName, propValue) {
  // Only change code below this line
  lion[propName] = propValue;
  return lion;
  // Only change code above this line
}

myFunction("roar", "roar-roar");
console.log(myFunction("roar", "roar-roar"));
module.exports = myFunction;
