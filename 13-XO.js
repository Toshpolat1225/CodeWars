// XO o'yini algaritmi
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // Agar x bn o bolmasa
// XO("zzoo") => false
function XO(str) {
    let countX = 0;
    let countO = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.toLowerCase()[i] === 'x') countX++;
      if (str.toLowerCase()[i] === 'o') countO++;
    }
    return countX === countO;
}