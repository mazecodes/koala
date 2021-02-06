const commander = require('commander');

const package = require('../../package.json');

const setCommand = require('./commands/set');
const getCommand = require('./commands/get');

commander.name('koala');
commander.version(package.version);

commander
  .command('set <alias> <command>')
  .alias('s')
  .description('Set a shortcut')
  .action(setCommand);

commander
  .command('get <alias>')
  .alias('c')
  .description('Get the command of a shortcut')
  .action(getCommand);

module.exports = commander;
