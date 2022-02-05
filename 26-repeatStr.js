// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
function repeatStr (n, s) {
    let soz = s
    for(var i =0; i<n-1; i++){
      soz = soz + s.toString()
    }
    return soz;
  }

  // boshqa yo'li'
  repeatStr = (n, s) => s.repeat(n)