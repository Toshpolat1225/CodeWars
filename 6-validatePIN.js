//Funktsiyaga yaroqli PIN-kod o'tkazilsa, return true, aks holda qaytaring false.
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
function validatePIN (pin) {
    if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }
  for (var i = 0; i < pin.length; i++) {
    if (pin[i] > '9' || pin[i] < '0') {
       return false;
    }

  }
  return true;
}

// boshqa yo'li
const validatePIN2 = pin => /^(\d{4}$|\d{6}$)/.test(pin);