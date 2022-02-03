// [1,-4,7,12] => 1 + 7 + 12 = 20
function positiveSum(arr) {
    let summ = 0
    for(var i = 0; i < arr.length; i++ ){
      if(arr[i]>=0){
        summ = arr[i] + summ
      }
    }
    return summ
  }