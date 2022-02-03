// sizga son beriladi n^3 + (n-1)^3 + ... + 1^3 = m agar sonimiz m teng bolsa n toping n butun son agar son m ga togri kelmasa -1 qaytarsin
function findNb(V) {
    let n = 0;
    let V2 = 0;
    for (let i = 0; ; i++) {
        n++;
        V1 = n**3
        V2 = V2 + V1
        if((V-V2)==0){
           return n
            break;
        }
        if((V-V2)<0){
            return -1
            break;
        }
    }
}