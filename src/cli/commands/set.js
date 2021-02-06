const inquirer = require('inquirer');

const shortcut = require('../../lib/shortcut');
const logger = require('../../lib/logger');

/**
 * Set a new shortcut
 *
 * @param {String} alias - The shortcut alias
 * @param {String} command - The command to create a shortcut for
 * @returns {void}
 */
module.exports = async (alias, _command) => {
  const remainingCommands = process.argv.slice(5);
  const command =
    remainingCommands.length !== 0
      ? `${_command} && ${remainingCommands.join(' && ')}`
      : _command;

  try {
    shortcut.setShortcut(alias, command);

    logger.success('Shortcut was set successfully.');
  } catch (error) {
    logger.warning('Shortcut already exists.');

    const questions = [
      {
        name: 'replace',
        message: 'Are you sure you want to replace it?',
        type: 'confirm',
      },
    ];
    const answers = await inquirer.prompt(questions);

    if (answers.replace) {
      shortcut.setShortcut(alias, command, true);

      logger.success('Shortcut was replaced successfully.');
    }
  }
};
