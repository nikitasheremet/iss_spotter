const request = require("request");
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
// const fetchMyIP = (callback) => {
//   // console.log("callback is:", callback);
//   request('https://api.ipify.org/?format=json', (err, resp, body) => {
//     if (err) {
//       console.log("error is:", error)
//       callback(err, null);
//     } else if (resp.statusCode !== 200) {
//       callback(Error(`Status Code ${response.statusCode} when fetching IP. Response: ${body}`), null)
//     } else {
//       console.log("body is:", JSON.parse(body).ip)
//       callback(null, JSON.parse(body).ip);
//     }
//   })
// }

const fetchCoordsByIP = (IP, callback) => {
  request(`https://ipvigilante.com/${IP}`, (err, resp, body) => {
    if (err) {
      callback(err, null);
    } else if (resp.statusCode !== 200) {
      callback(Error(`Status Code ${resp.statusCode} when fetching IP. Response: ${body}`), null)
    }
    callback(null, body);
  })
}

module.exports = fetchCoordsByIP;