const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("\'arr\' parameter must be an instance of the Array!");

  let res = arr.slice();

  for (let i = 0; i < res.length; i += 1) {
    switch (res[i]) {
      case '--double-next':
        if (i !== res.length - 1) res[i] = res[i+1];
        else {
          res.splice(i, 1);
          i--;
        }
        break;
      case '--double-prev':
        if (i !== 0 && arr[i] !== '--discard-next') res[i] = res[i-1];
        else {
          res.splice(i, 1);
          i--;
        }
        break;
      case '--discard-prev': 
        if (i !== 0 && arr[i] !== '--discard-next') res.splice(i-1, 2);
        else res.splice(i, 1); 
        i--;
        break;
      case '--discard-next':
        if (i !== res.length - 1) res.splice(i, 2);
        else res.splice(i, 1);
        i--;
        break;
    }
  }
  

  return res;
  // if (!Array.isArray(arr)) return "\'arr\' parameter must be an instance of the Array!";

  // const commands = ['--double-next', '--double-prev', '--discard-prev', '--discard-next'];
  // let res = arr.slice();

  // for (let i = 0; i < res.length; i += 1) {
  //   if (typeof res[i] !== 'number' && !commands.includes(res[i])) return "\'arr\' parameter must be an instance of the Array!";

  //   switch (res[i]) {
  //     case commands[0]:
  //       if (i !== res.length - 1) res[i] = res[i+1];
  //       else res.splice(i, 1);
  //     case commands[1]:
  //       if (i !== 0) res[i] = res[i-1];
  //       else res.splice(i, 1);
  //     case commands[2]: 
  //       if (i !== 0) res.splice(i-1, 1);
  //       else res.splice(i, 1);
  //     case commands[3]:
  //       if (i !== res.length - 1) res.splice(i+1, 1);
  //       else res.splice(i, 1);
  //   }
  // }

  // return res;
}

module.exports = {
  transform
};
