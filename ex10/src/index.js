function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
    002: {
      artist: "Frank Sinatra",
      title: "My way",
      release_year: 1969,
      id: 101,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
    },
  };
  return myMusic;
}
myFunction();
console.log(myFunction()[2]);
module.exports = myFunction;
