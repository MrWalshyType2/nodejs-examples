module.exports.isEven = (num) => num % 2 == 0;

module.exports.isOdd = (num) => !this.isEven(num);

// instead of exporting only a function constructor or class, we can also export
// many different functions to be imported individually, these are attached
// to the module.exports object