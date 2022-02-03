// Bir vaqtlar, eski yovvoyi tog'li g'arbdan o'tayotganda, ...
// ... bir kishiga bir nuqtadan boshqasiga o'tish uchun ko'rsatmalar berildi. Yo'nalishlar "SHImoliy", "JANUBIY", "G'ARB", "SHARQ" edi. Shubhasiz, "SHImoliy" va "JANUBI" qarama-qarshidir, "G'ARB" va "SHARQ" ham.

// Bir yo'nalishga borib, darhol teskari yo'nalishga qaytish keraksiz harakatdir. Bu yovvoyi g'arb bo'lib, qo'rqinchli ob-havo va suv ko'p bo'lmaganligi sababli, o'zingizga ozgina energiya tejash muhim, aks holda siz tashnalikdan o'lishingiz mumkin!

// Qanday qilib men tog'li cho'lni aqlli tarzda kesib o'tdim .
// Erkakka berilgan ko'rsatmalar, masalan, quyidagilar (tilga qarab):

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or
// [North, South, South, East, West, North, West]
// Siz darhol "SHIMOLIYGA" va darhol "JANUBIY" ga borish oqilona emasligini ko'rishingiz mumkin, yaxshisi bir joyda qoling! Shunday qilib, vazifa odamga rejaning soddalashtirilgan versiyasini berishdir. Bu holatda yaxshiroq reja oddiygina:

// ["WEST"]
// or
// { "WEST" }
// or
// [West]
// Boshqa misollar:
// In ["NORTH", "SOUTH", "EAST", "WEST"], yo'nalish "NORTH" + "SOUTH"shimolga ketadi va darhol qaytib keladi .

// Yo'l ["EAST", "WEST"], hozir bo'ladi "EAST"va "WEST"bir-birini yo'q qiladi, shuning uchun yakuniy natija [](Clojureda nol) bo'ladi.

// ["SHIMOL", "SHARQ", "G'ARB", "JANUBI", "G'ARB", "G'ARB"]da "SHImoliy" va "JANUBI" to'g'ridan-to'g'ri qarama-qarshi emas , balki "SHARQ" qisqargandan keyin to'g'ridan-to'g'ri qarama-qarshi bo'lib qoladi. va "WEST" shuning uchun butun yo'l ["WEST", "WEST"] ga qisqartirilishi mumkin.

// Vazifa
// Satrlar massivini oladigan va keraksiz yo'nalishlari olib tashlangan (W<->E yoki S<->N yonma-yondirReduc ) qatorlar qatorini qaytaradigan funksiya yozing .

// Haskell versiyasi bilan yo'nalishlar ro'yxatini oladi data Direction = North | East | West | South.
// Yo'l hech narsaga qisqartirilganda Clojure versiyasi nolga qaytadi.
// Rust versiyasi bir tilim oladi enum Direction {North, East, West, South}.
// Koʻproq misollarni “Namunaviy testlar” boʻlimida koʻring:
// Eslatmalar
// Hamma yo'llarni sodda qilib bo'lmaydi. Yo'l ["SHImoliy", "G'arbiy", "JANUBIY", "SHARQ"] qisqartirilmaydi. "SHIMOL" va "G'ARB", "G'ARB" va "JANUBIY", "JANUB" va "SHARQ" bir-biriga to'g'ridan-to'g'ri qarama-qarshi emas va bunday bo'la olmaydi. Demak, natija yo'lining o'zi: ["SHIMOL", "G'ARB", "JANUBI", "SHARQ"].
// agar siz tarjima qilmoqchi bo'lsangiz, tarjima qilishdan oldin so'rang.


function dirReduc(arr){
    const result = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "NORTH" && arr[i + 1] === "SOUTH" || arr[i] === "SOUTH" && arr[i + 1] === "NORTH" || arr[i] === "EAST" && arr[i + 1] === "WEST" || arr[i] === "WEST" && arr[i + 1] === "EAST"){
            i++
        } else {
            if(result[result.length - 1] === "NORTH" && arr[i] === "SOUTH" || result[result.length - 1] === "SOUTH" && arr[i] === "NORTH" || result[result.length - 1] === "EAST" && arr[i] === "WEST" || result[result.length - 1] === "WEST" && arr[i] === "EAST"){
                result.pop()
            } else {
                result.push(arr[i])
            }
        }
    }
    return result
}



function dirReduc2(arr){
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "WEST" && arr[i+1] === "EAST" ||
          arr[i] === "EAST" && arr[i+1] === "WEST" ||
          arr[i] === "NORTH" && arr[i+1] === "SOUTH" ||
          arr[i] === "SOUTH" && arr[i+1] === "NORTH") {
          arr.splice(i, 2);
          count++;
          i--;
      }
    }
    return count === 0 ? arr : dirReduc(arr);
  }


  // boshqa yo'li