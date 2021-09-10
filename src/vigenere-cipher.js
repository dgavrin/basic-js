import { NotImplementedError } from '../extensions/index.js';

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

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
export default class VigenereCipheringMachine {
  direction = true;
  constructor(value) {
    if (value === false) {
      this.direction = false;
    }
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptedMessage = "";
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      let currentCharacter = message[i];
      if (alphabet.indexOf(currentCharacter) == -1) {
        encryptedMessage += currentCharacter;
        continue;
      }

      let m = alphabet.indexOf(currentCharacter);
      let k = alphabet.indexOf(key[j]);
      encryptedMessage += String.fromCharCode(((m + k) % 26) + 65);
      j === key.length - 1 ? j = 0 : j++;
    }

    if (!this.direction) {
      return encryptedMessage.split("").reverse().join("");
    }

    return encryptedMessage;
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptedMessage = "";
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      let currentCharacter = message[i];
      if (alphabet.indexOf(currentCharacter) == -1) {
        encryptedMessage += currentCharacter;
        continue;
      }

      let c = alphabet.indexOf(currentCharacter);
      let k = alphabet.indexOf(key[j]);
      encryptedMessage += String.fromCharCode(((c + 26 - k) % 26) + 65);
      j === key.length - 1 ? j = 0 : j++;
    }

    if (!this.direction) {
      return encryptedMessage.split("").reverse().join("");
    }

    return encryptedMessage;
  }
}
