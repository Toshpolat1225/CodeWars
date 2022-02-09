const map = {
    hundred: 100,
    thousand: 1000,
    million: 1000000,
};
const mapNumber = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen':13,
    'fourteen':14,
    'fifteen':15,
    'sixteen':16,
    'seventeen':17,
    'eighteen':18,
    'nineteen':19,
    'twenty':20,
    'thirty': 30,
    'forty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90,
};

function parseInt(string) {
  const splitted = string.split(' ').filter((a) => a !== 'and');
  
  let storeValue = 0;
  let currentValue = 0;
  let precMul = undefined;
  for (let word of splitted) {
    if (Object.prototype.hasOwnProperty.call(mapNumber, word)) {
      currentValue += mapNumber[word];
      continue;
    }
    const splitNumb = word.split('-');
    if (Object.prototype.hasOwnProperty.call(mapNumber, splitNumb[0]) 
            && Object.prototype.hasOwnProperty.call(mapNumber, splitNumb[1])) {
      currentValue += mapNumber[splitNumb[0]] + mapNumber[splitNumb[1]];
      continue;
    }
    
    const mul = map[word];
    if (precMul && precMul <= mul) {
      storeValue = (storeValue + currentValue) * mul
    } else {
      storeValue += (currentValue * mul)
    }
    precMul = mul;
    currentValue = 0;
  }
  if (currentValue) storeValue += currentValue;
  return storeValue; 
  
}