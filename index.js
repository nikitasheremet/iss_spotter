const nextISSTimesForMyLocation = require("./iss")

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  passTimes.forEach(pass => {
    console.log(`Next Pass at ${(new Date(pass.risetime * 1000))} for ${pass.duration} seconds!`)
  })
});