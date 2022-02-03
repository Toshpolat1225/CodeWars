// "This website is for losers LOL!" >>>>>>>> "Ths wbst s fr lsrs LL!"
function disemvowel(str) {
    let newStr = "";
    for (i = 0; i <= str.length; i++) if (str.charAt(i).toLowerCase() != "a" && str.charAt(i).toLowerCase() != "e" && str.charAt(i).toLowerCase() != "i" && str.charAt(i).toLowerCase() != "o" && str.charAt(i).toLowerCase() != "u") newStr += str.charAt(i)
    return newStr;
  }

// charAt() funksiya stringni nechi elementida son bolsa shu stringni qaytaradi