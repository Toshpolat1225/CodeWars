// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
function pigIt(str){
    let array = str.split(" ");
    let newStr = "";
  let ay = "ay "
    for (let i = 0; i < array.length; i++){
      if(i< array.length-1){
        ay = ay
        console.log(array[i].charAt(0)+"ay")
        if(array[i].charAt(0)=="!"){
          ay = ""
        }
      }else{
        ay = "ay"
      }
    array[i] = array[i].slice(1) + array[i].charAt(0) + ay;
    newStr += array[i] 
    } return newStr
  }


  // boshqa yo'li'
  function pigIt(str) {
    return str.replace(/(\w)(\w*)(\s|$)/g, '$2$1ay$3');
  }
  