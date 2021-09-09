import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  str = String(str);
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }

  if (options.addition === null) {
    options.addition = "null";
  }

  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }

  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }

  let result = [];
  let additionString = [];
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    additionString.push(options.addition);
  }

  additionString = str + additionString.join(options.additionSeparator);
  for (let i = 0; i < options.repeatTimes; i++) {
    result.push(additionString);
  }

  return result.join(options.separator || "+");
}
