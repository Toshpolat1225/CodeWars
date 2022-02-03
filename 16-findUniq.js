// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
function findUniq(arr) {
    for(var i = 1; i<arr.length; i++)
        {
          if(arr[i]==arr[i-1] && arr[i]!=arr[i+1]){
         return arr[i+1];
            }
          else if(arr[i]!=arr[i-1] && arr[i]==arr[i+1]) {
            return arr[i-1];}
          else if(arr[i]!=arr[i-1] && arr[i]!=arr[i+1]) {
            return arr[i];}
        }
  }

  const findUniq2 = arr=> +arr.filter(e=>arr.indexOf(e)==arr.lastIndexOf(e))

  const findUniq3 = (a) => a.sort()[0] === a.sort()[1] ? a.sort()[a.length - 1] : a.sort()[0];

  // boshqa yo'li