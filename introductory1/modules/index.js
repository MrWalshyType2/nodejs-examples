const Animal = require('./Animal'); // use the 'require' keyword to import a module that has been exported, we don't need the file type .js
const { isEven } = require('./helpers');
const helpers = require('./helpers');
// if only importing a function from a module, we must specify curly braces
// around it

const animal = new Animal("Duck");
console.log(animal);

console.log(isEven(30));

// CommonJS modules are part of Node js, they are for modularising our code
// - i.e., separating it into separate files
