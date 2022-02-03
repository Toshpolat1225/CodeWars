// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum(a, b) {
    if(a == b){
      return a
    }
    else{
        if(b>a){
            let summ = 0
            vaqrincha = a
            for(var i = 0; a<=b; i++) {
                summ = summ + a
                a++  
            }
            return summ
        }
        else{
            let summ = 0
            vaqrincha = b
            for(var i = 0; b<=a; i++) {
                summ = summ + b
                b++  
            }
            return summ
        }
    }
}

const GetSum2 = (a, b) => (a + b) * (Math.abs(a - b) + 1) / 2;

// boshqa yo'li