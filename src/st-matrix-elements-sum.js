import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let sum = 0;
  let indexes = [];
  matrix.forEach(item => {
    item.forEach((innerItem, index) => {
      if (innerItem === 0) {
        indexes.push(index);
      }

      if (!indexes.includes(index)) {
        sum += innerItem;
      }
    });
  });

  return sum;
}
