const commander = require('commander');

const package = require('../../package.json');

const setCommand = require('./commands/set');

commander.name('koala');
commander.version(package.version);

commander
  .command('set <alias> <command>')
  .alias('s')
  .description('Set a shortcut')
  .action(setCommand);

module.exports = commander;
