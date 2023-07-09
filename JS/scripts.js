// business logic 
  
  function checkInp(num) {
    let result = [];  
    if (!isNaN(num)) {
      for (let index= 0; index <= num; index += 1){
        let newNum = index.toString().split("");
        if (newNum.includes("3")){
          result.push("Won't you be my neighbor");
        } else if (newNum.includes("2")){
          result.push("Boop!");
        } else if (newNum.includes("1")){
          result.push("Beep!!")
        } else {
          result.push(index);
        }
      }  
    } else {
      return false;
    }
    return result;
  }




//user interface logic 

function handleFormSubmission(e) {
  e.preventDefault();
  const input = document.getElementById("PutYaNumba").value; 
  document.getElementById("new-nums").textContent = input;
}

window.addEventListener("load", function() {
  document.querySelector("form#input").addEventListener("submit", handleFormSubmission);
});