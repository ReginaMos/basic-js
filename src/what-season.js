const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function isValid(obj) {
  try {
    if (Object.prototype.toString.call(obj) === '[object Date]') {
      const time = obj.getTime();
      return !isNaN(time);
    }
    return false;
  } catch (err) {
    return false;
  }
}

function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';

  if (date instanceof Date && isValid(date)) {
    let month = date.getMonth(); 
    
    if (month >= 2 && month < 5) return 'spring';
    else if (month >= 5 && month < 8) return 'summer';
    else if (month >= 8 && month < 11) return 'autumn';
    return 'winter';
  }

  throw new Error("Invalid date!")
}

module.exports = {
  getSeason
};
