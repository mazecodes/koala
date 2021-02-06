const chalk = require('chalk');

const shortcut = require('../../lib/shortcut');
const table = require('../../lib/table');

/**
 * List all shortcuts
 *
 * @returns {void}
 */
module.exports = () => {
  const shortcuts = shortcut.getShortcuts();
  const createdTable = table.fromShortcuts(shortcuts);
  const size = shortcut.getSize();

  console.log(`\nAll shortcuts ${chalk.bold(`(${size})`)}:`);
  console.log(createdTable);
};
