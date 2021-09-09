import { NotImplementedError } from '../extensions/index.js';

const INCORRECT_RESULT_MSG = 'Invalid date!';

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
export default function getSeason(date) {
  let season = '';
  let monthNumber = -1;
  if (date == undefined) {
    season = 'Unable to determine the time of year!';
  }

  try {
    monthNumber = date.getMonth();
  } catch (e) {
    throw new Error(INCORRECT_RESULT_MSG);
  }

  if (monthNumber >= 2 && monthNumber <= 4) {
    season = 'spring';
  } else if (monthNumber >= 5 && monthNumber <= 7) {
    season = 'summer';
  } else if (monthNumber >= 8 && monthNumber <= 10) {
    season = 'autumn';
  } else {
    season = 'winter';
  }

  return season;
}
