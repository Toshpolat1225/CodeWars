// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
String.prototype.toJadenCase = function () {
    return this.split(' ').map(w => w.slice(0,1).toUpperCase() + w.slice(1)).join(' ');
  };

  // split() matn massivga aylantiradi ("") harflar elementga aylandi (" ") sozlar elementga aylanadi ("  ") gapni ikta propusk bor bolsa shunda keyin ikkinchi element oladi
  // map() massiv elemantlarini ko'rib chiqadi
  // slice(a,b) massiv elementlarni ajratib beradi ikta qiymat qabul qildi (Birinchi qiymati kiradigan qavs, ikkinchisi kirmaydigan qavs hisovlandi)
  // toUpperCase() matn bosh harflarga almashtiriladi
  // join() massivni string shakl olib keladi