const shortcut = require('../../lib/shortcut');
const logger = require('../../lib/logger');

/**
 * Delete the given shortcut
 *
 * @param {String} alias - The shortcut alias
 * @returns {void}
 */
module.exports = alias => {
  try {
    shortcut.deleteShortcut(alias);

    logger.success('Shortcut was deleted successfully.');
  } catch (error) {
    logger.error(error.message);
  }
};
