// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

const oddOrEven =array => array.reduce( function (sum, item) { return sum + item }, 0) % 2 == 0 ? 'even': 'odd';

const oddOrEven2 = a => a.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd';

// boshqa yo'li