// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false
const isSquare = n=> Math.floor(Math.sqrt(n))==Math.sqrt(n) ? true: false

//boshqa yo'li

const isSquare = n => Math.sqrt(n) % 1 === 0