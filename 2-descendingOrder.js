// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
   return Number(n.toString().split("").sort().reverse().join(""))
}
//nomerni stringa aylantirdik n.toString()
//stringni massivga aylantirdik split("")
//massivni sortirofka qildik sort()
//sortirifka bolgan massivni oyogini osmondan aylantirdik reverse()
//hosil bo'lgan massivni stringga aylantirdik join("")