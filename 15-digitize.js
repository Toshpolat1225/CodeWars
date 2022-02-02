// 348597 => [7,9,5,8,4,3]
// 0 => [0]
const digitize = n => n.toString().split('').map(Number).reverse()

const digitize2 = n => [...String(n)].map(Number).reverse()

// boshqa yo'li