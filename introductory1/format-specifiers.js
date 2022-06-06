// format specifiers
// - we can use these to insert values into text
// - %s for strings
// - %d for numbers
// console.log(formatString, args...);
const username = "Bob";
console.log("Hello %s", username);
console.log("Hello %s, we can insert multiple strings: %s", username, "inserted");

console.log("We can also insert numbers: %d", 32 + 5 / 4);

console.log("We can insert args without specifiers as well:", username);