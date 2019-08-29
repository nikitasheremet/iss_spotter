const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss_promised");

fetchMyIP().then((data) => {
  IP = JSON.parse(data).ip;
  return fetchCoordsByIP(IP);
}).then((data) => {
  coor = {
    latitude: JSON.parse(data).data.latitude,
    longitude: JSON.parse(data).data.longitude
  }
  return fetchISSFlyOverTimes(coor)
}).then((data) => {
  passTimes = JSON.parse(data).response;
  passTimes.forEach(pass => {
    console.log(`Next Pass at ${(new Date(pass.risetime * 1000))} for ${pass.duration} seconds!`)
  })
}).catch((error) => {
  console.log("error is: ", error.message);
})