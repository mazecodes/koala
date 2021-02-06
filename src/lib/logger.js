const chalk = require('chalk');

/**
 * Log a success
 *
 * @param {String} message - Log message
 * @returns {void}
 *
 * @example
 *   success('Message')
 */
const success = message => {
  console.log(`${chalk.greenBright('[SUCCESS]')} ${message}`);
};

/**
 * Log an error
 *
 * @param {String} message - Log message
 * @returns {void}
 *
 * @example
 *   error('Message')
 */
const error = message => {
  console.log(`${chalk.redBright('[ERROR]')} ${message}`);
};

/**
 * Log a warning
 *
 * @param {String} message - Log message
 * @returns {void}
 *
 * @example
 *   warning('Message')
 */
const warning = message => {
  console.log(`${chalk.yellowBright('[WARNING]')} ${message}`);
};

module.exports = {
  success,
  error,
  warning,
};
