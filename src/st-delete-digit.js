import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let max = 0;
  let value = String(n).split("");
  for (let i = 0; i < value.length; i++) {
    let currentAttempt = value.map(e => e);
    currentAttempt.splice(i, 1);
    let currentNumber = Number(currentAttempt.join(""));
    if (currentNumber > max) {
      max = currentNumber;
    }
  }

  return max;
}
