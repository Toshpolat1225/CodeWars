// Senior bo'lish uchun a'zo kamida 55 yoshda bo'lishi va imkoniyatligi 7 dan Senior bo'lishi kerak. Ushbu kroket klubida imkoniyatlar -2 dan +26 gacha; o'yinchi qanchalik katta bo'lsa, imkoniyatlik shunchalik katta bo'ladi.
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

const openOrSenior = (x) => x.map((y) => ((y[0] >= 55 && y[1] > 7) ? 'Senior' : 'Open'));