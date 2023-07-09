// business logic 


window.onload = function () {
  
  function checkInp(num) {
    let result = [];  
    if (!isNaN(num)) {
      for (let index= 0; index <= num; index += 1){
        let newNum = index.toString().split("");
        if (newNum.includes("1")){
          result.push("Beep!");
        } else {
          result.push(index);
        }
      }  
    } else {
      return false;
    }
    return result;
  }

};




//user interface logic 

