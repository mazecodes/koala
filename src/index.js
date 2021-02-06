const chalk = require('chalk');

const shortcut = require('./lib/shortcut');
const logger = require('./lib/logger');
const { bindToCommand, executeCommand } = require('./lib/command');

/**
 * Execute the given shortcut
 *
 * @param {Array} _args - Process argv
 * @returns {void}
 */
module.exports = _args => {
  const [alias, ...args] = _args;

  if (!alias) {
    logger.error('You should provide the alias of the shortcut.');
  }

  try {
    const command = bindToCommand(shortcut.getCommand(alias), args);

    shortcut.useShortcut(alias);

    logger.koala(`Running: ${chalk.bold(command)}`);
    executeCommand(command);
  } catch (error) {
    logger.error(error.message);
  }
};
