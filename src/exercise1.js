const chalk = require('chalk');
var _ = require('lodash');


console.log(chalk.cyan('\nEXERCISE 1 LOADED\n'));

const zip = (input) => {

var output = [];


// _.forEach(input, function(colection) {
// 	_.forEach(colection, function(item, key) {
// 		// output.

// 		// var colectionOutput = [];

// 		// colectionOutput[key] = item;

// 		// output.push(colectionOutput);
// 	});
// });

// output.push(colectionOutput);

// console.log(output);
return output;
}

module.exports = {
  zip: zip,
  run: zip
}