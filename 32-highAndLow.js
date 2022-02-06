// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

const highAndLow = numbers => `${Math.max(...numbers.split(" ").map(Number))} ${Math.min(...numbers.split(" ").map(Number))}`