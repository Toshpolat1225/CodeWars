// tribonacci bu fibonacci mukkamalroqi ekan signature massiv berar ekan massiv elementi 3 ekan bular tribonacci ni birinchi 3 ta hadi ekan n esa tribonacci ning uzunligi

function tribonacci(signature, n){
    let arr =[];
    let n1 = signature[0], n2 = signature[1], n3=signature[2], x;
    for (let i = 1; i <= n; i++) {
        arr.push(n1)
        x = n1 + n2 + n3;
        n1 = n2;
        n2 = n3;
        n3 = x;
      }
      return arr
}

function tribonacci2(s,n){
    var arr = [];
    for(var i=0; i<n; i++) {
      arr.push((i<3) ? s[i] : arr[i-1]+arr[i-2]+arr[i-3]);
    }
    return arr;
  }

  // boshqa yo'li'