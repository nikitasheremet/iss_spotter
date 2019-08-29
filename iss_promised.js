const request = require('request-promise-native');

const fetchMyIP = () => {
  return request('https://api.ipify.org/?format=json')
}
const fetchCoordsByIP = (IP) => {
  return request(`https://ipvigilante.com/${IP}`)
}
const fetchISSFlyOverTimes = (coords) => {
  return request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`)
}
module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };