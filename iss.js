const request = require("request");
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = (callback) => {
  // console.log("callback is:", callback);
  request('https://api.ipify.org/?format=json', (err, resp, body) => {
    if (err) {
      // console.log("error is:", error)
      callback(err, null);
      // } else if (resp.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP. Response: ${body}`), null)
    } else {
      // console.log("body is:", JSON.parse(body).ip)
      callback(null, JSON.parse(body).ip);
    }
  })
}

const fetchCoordsByIP = (IP, callback) => {
  request(`https://ipvigilante.com/${IP}`, (err, resp, body) => {
    if (err) {
      callback(err, null);
    } else if (resp.statusCode !== 200) {
      callback(Error(`Status Code ${resp.statusCode} when fetching IP. Response: ${body}`), null)
    } else {
      data = {
        latitude: JSON.parse(body).data.latitude,
        longitude: JSON.parse(body).data.longitude
      }
      callback(null, data);
    }
  });
}

const fetchISSFlyOverTimes = (coords, callback) => {
  request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`, (err, resp, body) => {
    if (err) {
      callback(err, null);
    } else if (resp.statusCode !== 200) {
      callback(Error(`Status Code ${resp.statusCode} when fetching IP. Response: ${body}`), null)
    } else {
      callback(null, JSON.parse(body).response);
    }
  })
}

const nextISSTimesForMyLocation = function (callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      console.log("Error is:", error);
    } else {
      fetchCoordsByIP(ip, (err, desc) => {
        if (err) {
          console.log(err)
        } else {
          fetchISSFlyOverTimes(desc, (err, desc) => {
            if (err) {
              console.log("error is:", err)
            } else {
              callback(null, desc);
            }
          });
        }
      });
    }
  });
}

module.exports = nextISSTimesForMyLocation;

// { latitude: '43.63830', longitude: '-79.43010' }