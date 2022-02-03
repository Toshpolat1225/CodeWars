// Argument sifatida massiv (arr) berilgan countSmileysbo'lsa, jilmayib turgan yuzlarning umumiy sonini qaytarishi kerak bo'lgan funktsiyani bajaring.
// Tabassumli yuz qoidalari:
// Har bir tabassum yuzida yaroqli juft ko‘z bo‘lishi kerak. :Ko'zlar yoki sifatida belgilanishi mumkin;
// Kuluvchi yuzning burni bo'lishi mumkin, lekin bu shart emas. Burun uchun yaroqli belgilar -yoki~
// )Har bir jilmayib turgan yuzda yoki bilan belgilanishi kerak bo'lgan jilmayuvchi og'iz bo'lishi kerak D
function countSmileys(arr) {
    var smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
    var count = 0;
    
    for (var i=0; i<arr.length; i++){
      for (var j=0; j<smileys.length; j++){
        if (arr[i]===smileys[j]){
          count++;
        }
      }
      }
    return count;
}


const countSmileys = ss => ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0);

// boshqa yo'li