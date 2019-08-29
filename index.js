const fetchMyIP = require("./iss");
const fetchCoordsByIP = require("./iss");
const fetchISSFlyOverTimes = require("./iss")
const nextISSTimesForMyLocation = require("./iss")


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("Error is:", error);
//   } else {
//     console.log(ip);
//   }
// });

// fetchCoordsByIP("66.207.199.230", (err, desc) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(desc);
//   }
// });

// fetchISSFlyOverTimes({ latitude: '43.63830', longitude: '-79.43010' }, (err, desc) => {
//   if (err) {
//     console.log("error is:", err)
//   } else {
//     console.log(desc);
//   }
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  passTimes.forEach(pass => {
    console.log(`Next Pass at ${(new Date(pass.risetime * 1000))} for ${pass.duration} seconds!`)
  })
});



// { latitude: '43.63830', longitude: '-79.43010' }

// 66.207.199.230