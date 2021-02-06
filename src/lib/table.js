const table = require('table');
const chalk = require('chalk');
const moment = require('moment');

/**
 * Create a table from shortcuts
 *
 * @param {Object} shortcuts - List of shortcuts
 * @returns {String} - The created table
 *
 * @example
 *   fromShortcuts({
 *     push: {
 *       command: 'git push origin master',
 *       date: Date.now(),
 *       uses: 0,
 *     }
 *   })
 */
const fromShortcuts = shortcuts => {
  const data = [
    [
      chalk.bold('Alias'),
      chalk.bold('Command'),
      chalk.bold('Date'),
      chalk.bold('Uses'),
    ],
  ];

  Object.keys(shortcuts)
    .reverse()
    .forEach(alias => {
      const shortcutObject = shortcuts[alias];
      const date = moment(shortcutObject.date).fromNow();
      const { uses, command } = shortcutObject;

      data.push([alias, command, date, uses]);
    });

  return table.table(data, {
    border: table.getBorderCharacters('norc'),
    columns: {
      0: {
        width: 10,
      },
      1: {
        width: 25,
      },
      2: {
        width: 15,
      },
      3: {
        width: 6,
      },
    },
  });
};

module.exports = {
  fromShortcuts,
};
