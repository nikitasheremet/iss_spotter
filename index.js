const fetchMyIP = require("./iss");
const fetchCoordsByIP = require("./iss");


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("Error is:", error);
//   } else {
//     console.log(ip);
//   }
// });

fetchCoordsByIP("66.207.199.230", (err, desc) => {
  if (err) {
    console.log(err)
  } else {
    console.log(desc);
  }
});

// 66.207.199.230