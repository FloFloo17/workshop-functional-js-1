const chalk = require('chalk');
const _ = require('lodash');

console.log(chalk.cyan('\nEXERCISE 2 LOADED\n'));

const reverseYolo = input => {
  return _.chain(input)
    .values()
    .map(serie => _.orderBy(serie).reverse())
    .flatten()
    .value();
}
// console.log(reverseYolo([00112247 + '033GKNORT']));

module.exports = {
  reverseYolo: reverseYolo,
  run: reverseYolo
}