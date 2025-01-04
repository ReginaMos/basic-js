const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(value) {
    if (value === false) {
      this.flag = false;
      return;
    }
    this.flag = true;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');
  
    const givingMessage = message.toUpperCase();
    const givingKey = key.toUpperCase();
    let encryptedMessage = '';

    for(let i = 0, j = 0; i < givingMessage.length; i += 1, j += 1) {
      if (givingMessage[i] >= 'A' && givingMessage[i] <= 'Z') {
        const keyChar = givingKey[j % key.length];
        const shift = ((givingMessage[i].charCodeAt() + keyChar.charCodeAt()) % 26) + 'A'.charCodeAt();

        encryptedMessage += String.fromCharCode(shift);
      } else {
        encryptedMessage += givingMessage[i];
        j -= 1;
      }
    }

    return this.flag ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) throw new Error('Incorrect arguments!');
    
    const givingMessage = encryptedMessage.toUpperCase();
    const givingKey = key.toUpperCase();
    let decryptedMessage = '';

    for(let i = 0, j = 0; i < givingMessage.length; i += 1, j += 1) {
      if (givingMessage[i] >= 'A' && givingMessage[i] <= 'Z') {
        const keyChar = givingKey[j % key.length];
        const shift = (givingMessage[i].charCodeAt() - keyChar.charCodeAt() + 26) % 26 + 'A'.charCodeAt();

        decryptedMessage += String.fromCharCode(shift);
      } else {
        decryptedMessage += givingMessage[i];
        j -= 1;
      }
    }

    return this.flag ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
