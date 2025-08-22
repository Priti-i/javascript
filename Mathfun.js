Math.floor(x) // Rounds a number down to the nearest integer.
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(-4.9)); // -5


Math.ceil(x)  // Rounds up to the nearest integer.
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(-4.1)); // -4

Math.round(x) //  Rounds to the nearest integer (0.5 and above rounds up).
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.6)); // 5

Math.trunc(x)  // Removes the decimal part (just keeps the integer).

console.log(Math.trunc(4.9));  // 4
console.log(Math.trunc(-4.9)); // -4

Math.abs(x) //  Returns the absolute value.

console.log(Math.abs(-10)); // 10

// Math.max(a, b, c, ...)  Math.min(...)   Largest smallest number.
console.log(Math.max(10, 20, 5)); // 20
console.log(Math.min(10, 20, 5)); // 5

// Math.random() → Returns a number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random()); // 0.0 to 0.999..