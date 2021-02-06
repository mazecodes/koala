const commander = require('commander');

const package = require('../../package.json');

const setCommand = require('./commands/set');
const getCommand = require('./commands/get');
const deleteCommand = require('./commands/delete');
const clearCommand = require('./commands/clear');
const listCommand = require('./commands/list');

commander.name('koala');
commander.version(package.version);

commander
  .command('set <alias> <command>')
  .alias('s')
  .description('Set a shortcut')
  .action(setCommand);

commander
  .command('get <alias>')
  .alias('g')
  .description('Get the command of a shortcut')
  .action(getCommand);

commander
  .command('delete <alias>')
  .alias('del')
  .description('Delete a shortcut')
  .action(deleteCommand);

commander
  .command('clear')
  .alias('c')
  .description('Clear all shortcuts')
  .action(clearCommand);

commander
  .command('list')
  .alias('ls')
  .description('List all shortcuts')
  .action(listCommand);

module.exports = commander;
