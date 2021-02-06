const shortcut = require('../../lib/shortcut');
const logger = require('../../lib/logger');

/**
 * Clear all shortcuts
 *
 * @returns {void}
 */
module.exports = () => {
  try {
    shortcut.clearShortcuts();

    logger.success('All shortcuts were cleared successfully.');
  } catch (error) {
    logger.error(error.message);
  }
};
