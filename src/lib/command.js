const { exec } = require('child_process');
const minimist = require('minimist');

/**
 * Bind arguments to a command
 *
 * @param {String} command - The command to bind to
 * @param {(Array|undefined)} args - The list of arguments
 * @returns {String} - The complete command
 *
 * @example
 *   bindToCommand('echo {}', ['foo', 'bar'])
 */
const bindToCommand = (command, args) => {
  let _command = command;

  if (args === undefined) {
    return _command;
  }

  const parsedArgs = minimist(args);

  /**
   * Bing arguments
   */
  while (_command.indexOf('{}') !== -1 && parsedArgs._.length !== 0) {
    _command = _command.replace('{}', parsedArgs._.shift());
  }

  /**
   * Attach extra arguments
   */
  _command =
    parsedArgs._.length !== 0
      ? `${_command} ${parsedArgs._.join(' ')}`
      : _command;

  delete parsedArgs._;

  /**
   * Add options
   */
  Object.keys(parsedArgs).forEach(option => {
    if (parsedArgs[option] === true) {
      _command += ` --${option}`;
      return;
    }

    _command += ` --${option} ${parsedArgs[option]}`;
  });

  return _command;
};

/**
 * Execute the given command
 *
 * @param {String} command - The command to execute
 * @return {void}
 *
 * @example
 *   executeCommand('ls')
 */
const executeCommand = command => {
  const commandProcess = exec(command, { cwd: process.cwd() });

  commandProcess.stdout.pipe(process.stdout);
  commandProcess.stderr.pipe(process.stderr);
};

module.exports = {
  bindToCommand,
  executeCommand,
};
