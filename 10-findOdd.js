// [7]qaytish kerak 7, chunki u 1 marta sodir bo'ladi.
// [0]qaytish kerak 0, chunki u 1 marta sodir bo'ladi.
// [1,1,2]qaytish kerak 2, chunki u 1 marta sodir bo'ladi.
// [0,1,0,1,0]qaytish kerak 0, chunki u 3 marta sodir bo'ladi.
// [1,2,2,3,3,3,4,3,3,3,2,2,1]qaytish kerak 4, chunki u 1 marta paydo bo'ladi.

function findOdd(A) {
    let count = 0;
    let arr = A.sort();
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          count++;
        }
      }
      if (count % 2 !== 0) {
        return arr[i];
      }
    }
}