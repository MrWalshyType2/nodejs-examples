// Coloured text output
const PREFIX = '\x1b'; // for indicating we are using an ANSI colour command
const RESET = PREFIX + "[0m"; // returns us to the default settings

// Foregrounds
const FG_BLACK = PREFIX + "[30m";
const FG_RED = PREFIX + "[31m";
const FG_GREEN = PREFIX + "[32m";
const FG_YELLOW = PREFIX + "[33m";
const FG_BLUE = PREFIX + "[34m";
const FG_MAGENTA = PREFIX + "[35m";
const FG_CYAN = PREFIX + "[36m";
const FG_WHITE = PREFIX + "[37m";

// Backgrounds
const BG_BLACK = PREFIX + "[40m";
const BG_RED = PREFIX + "[41m";
const BG_GREEN = PREFIX + "[42m";
const BG_YELLOW = PREFIX + "[43m";
const BG_BLUE = PREFIX + "[44m";
const BG_MAGENTA = PREFIX + "[45m";
const BG_CYAN = PREFIX + "[46m";
const BG_WHITE = PREFIX + "[47m";


// interpolated strings (ES2015 template literals)
// - strings with backticks
// - we can put expressions inside ${} in a string to insert the values
console.log(`Hello ${FG_YELLOW}BOB${RESET}.`);

console.log(`Hello ${BG_CYAN}${FG_YELLOW}BOB${RESET}.`);
// console.log("Hello " + FG_YELLOW + "Bob" + RESET + ".");