const commander = require('commander');

const package = require('../../package.json');

commander.name('koala');
commander.version(package.version);

commander
  .command('set <alias> <command>')
  .alias('s')
  .description('Set a shortcut')
  .action(alias => {
    console.log(alias);
  });

module.exports = commander;
