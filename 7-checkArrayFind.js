// Sizga massiv a va x qiymat beriladi. 
// x massivda bor yoqligini teksirish kerak true bn false chiqish kerak

function check(a, x) {
    return a.find(element => element == x) || a.find(element => element == x) == 0 ? true: false;
}

  // find massivni obyektni malumotlarni ichidan qidradi
  // ichidagi funksiya elementni taqqoslaydi agar tengbolsa chiqardi bolmasa undifand
  // undifand false chiqaradi son esa true
// faqat bizda bitta muoma bor massivda ham x da ham 0 bolsa uni ham true olish kerak