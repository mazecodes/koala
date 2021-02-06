const chalk = require('chalk');

const shortcut = require('../../lib/shortcut');
const logger = require('../../lib/logger');

/**
 * Get the command of the given shortcut
 *
 * @param {String} alias - The shortcut alias
 * @returns {void}
 */
module.exports = alias => {
  try {
    const command = shortcut.getCommand(alias);

    console.log(`Command: ${chalk.bold(command)}`);
  } catch (error) {
    logger.error(error.message);
  }
};
