const ConfigStore = require('configstore');
const chalk = require('chalk');

const package = require('../../package.json');

const config = new ConfigStore(package.name);

/**
 * Set a new shortcut
 *
 * @param {String} alias - The shortcut alias
 * @param {String} command - The command to create a shortcut for
 * @param {Boolean} [force] - Set the shortcut even if it already exists (optional)
 * @returns {void}
 *
 * @example
 *   setShortcut('push', 'git push origin master')
 *   setShortcut('push', 'git push origin master', true)
 */
const setShortcut = (alias, command, force = false) => {
  if (config.has(alias) && !force) {
    throw new Error('Shortcut already exists.');
  }

  config.set(alias, command);
};

/**
 * Get the command of the given shortcut
 *
 * @param {String} alias - The shortcut alias
 * @returns {String} - The command
 *
 * @example
 *   getCommand('push') // git push origin master
 */
const getCommand = alias => {
  if (!config.has(alias)) {
    throw new Error(`Shortcut ${chalk.bold(alias)} doesn't exist.`);
  }

  return config.get(alias);
};

/**
 * Delete the given shortcut
 *
 * @param {String} alias - The shortcut alias
 * @returns {void}
 *
 * @example
 *   deleteShortcut('push')
 */
const deleteShortcut = alias => {
  if (!config.has(alias)) {
    throw new Error(`Shortcut ${chalk.bold(alias)} doesn't exist.`);
  }

  config.delete(alias);
};

module.exports = {
  setShortcut,
  getCommand,
  deleteShortcut,
};
