const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  for (let i = 0; i < domains.length; i += 1) {
    const partsSplit = domains[i].split('.');
    const parts = [];
    for (let i = partsSplit.length - 1; i >= 0 ; i -= 1) {
      parts.unshift('.' + partsSplit.slice(i).reverse().join('.'));
    }

    for (let j = 0; j < parts.length; j += 1) {
      indPart = Object.keys(result).indexOf(parts[j]);
      if (indPart === -1) {
        result[parts[j]] = 1;
      } else {
        result[parts[j]] += 1;
      }
    }
  }

  return result;
}

module.exports = {
  getDNSStats
};
