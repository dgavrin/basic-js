import { NotImplementedError } from '../extensions/index.js';

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
export default function getDNSStats(domains) {
  let result = {};
  domains.forEach(item => {
    let splittedDomain = item.split(".");
    splittedDomain.reverse();
    let domainAddition = "";
    splittedDomain.forEach(innerItem => {
      domainAddition += `.${innerItem}`;
      if (!result[domainAddition]) {
        result[domainAddition] = 1;
      } else {
        result[domainAddition]++;
      }
    });
  });

  return result;
}
