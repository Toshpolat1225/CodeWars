// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    return name.split(" ").map(N => N[0].toUpperCase()).join(".")
 }

  // split() matn massivga aylantiradi ("") harflar elementga aylandi (" ") sozlar elementga aylanadi ("  ") gapni ikta propusk bor bolsa shunda keyin ikkinchi element oladi
  // map() massiv elemantlarini ko'rib chiqadi
  // toUpperCase() katta harflarga aylantiradi
  // join() massivni string shakl olib keladi va massiv element orasiga qiymatini qo'yib beradi

  const abbrevName2 = name => name.match(/\b\w/g).join('.').toUpperCase()

  // boshqa yo'li'