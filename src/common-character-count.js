const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const firstArr = s1.split('');
  const secondArr = s2.split('');
  const res = [];

  firstArr.forEach(item => {
    const idx = secondArr.indexOf(item);
    if (idx !== -1) {
      res.push(idx);
      secondArr.splice(idx, 1)
    }
  })

  return res.length;
}

module.exports = {
  getCommonCharacterCount
};
