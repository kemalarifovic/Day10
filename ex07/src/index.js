function myFunction(propName) {
  // Only change code below this line
  var lion = {
    name: "Simba",
    legs: 4,
    tail: 1,
    roar: "roar-roar",
  };
  delete lion[propName];
  return lion;
  //Only change code above this line
}

myFunction("roar");
console.log(myFunction("roar"));
module.exports = myFunction;
