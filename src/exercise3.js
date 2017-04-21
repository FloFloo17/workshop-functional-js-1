const chalk = require('chalk');

console.log(chalk.cyan('\nEXERCISE 3 LOADED\n'));

const reverseString = (input) => {

  return input.split('').reverse().join('');
}

module.exports = {
  reverseString: reverseString,
  run: reverseString
}