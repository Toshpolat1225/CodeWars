// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2);
  };

// parseInt(string, qaysi sanoqa otsin)
// satrni son qiladi va birinchi butun sonni qaytaradi
// Qaysi sanoq ekanligigi yozilmasa avtomatik 10 oladi
// join() massivni string shakl olib keladi


const binaryArrayToNumber2 = arr => parseInt(arr.join(''), 2);

// boshqa yo'li'