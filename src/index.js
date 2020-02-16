
const generateHotels = require('./generateHotels.js');
module.exports = () => {
    const data = generateHotels();
    return data
  }