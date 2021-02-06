const ConfigStore = require('configstore');

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

module.exports = {
  setShortcut,
};
