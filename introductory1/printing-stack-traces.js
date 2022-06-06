// printing stack traces
function foo() {
    console.log("foo");
    bar();
}

function bar() {
    console.log("bar");
    other();
}

function other() {
    console.trace(); // prints all functions called in the stack up to this point
}

foo();
console.log();
// Top of the stack   : other()
// Middle of the stack: bar()
// Bottom of the stack: foo()