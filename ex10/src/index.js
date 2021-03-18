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
      gold: true
    },
    002: {
      artist: "Raf Camora",
      title: "Anthra",
      release_year: 2019,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP"
      },
      id: 18
    }
  };
  return myMusic
}
myFunction()[2];
module.exports = myFunction;
